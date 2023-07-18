import TrackPlayer, {
  AppKilledPlaybackBehavior,
  Capability,
  Event,
} from 'react-native-track-player';

import surahsData from '../constants/audioData/audioDataPath.ts';

class MediaPlayer {
  private static instance: MediaPlayer;

  public isSetup = false;

  public static getInstance(): MediaPlayer {
    if (!MediaPlayer.instance) {
      MediaPlayer.instance = new MediaPlayer();
    }
    return MediaPlayer.instance;
  }

  public async setup() {
    try {
      await TrackPlayer.getCurrentTrack();
      this.isSetup = true;
    } catch {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.updateOptions({
        android: {
          appKilledPlaybackBehavior: AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification,
        },
        capabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.SkipToNext,
          Capability.SkipToPrevious,
          Capability.SeekTo,
        ],
        compactCapabilities: [Capability.Play, Capability.Pause, Capability.SkipToNext],
        progressUpdateEventInterval: 2,
      });
      this.isSetup = true;
    }
  }

  public async addTracks() {
    const verses = surahsData.flatMap((surah) => surah.verses);
    await TrackPlayer.add(verses);
  }

  public async getPlayerState() {
    const isPlaying = (await TrackPlayer.getState()) === TrackPlayer.STATE_PLAYING;
    const currentPosition = await TrackPlayer.getPosition();
    const currentDuration = await TrackPlayer.getDuration();

    return { isPlaying, currentPosition, currentDuration };
  }

  public async play() {
    await TrackPlayer.play();
  }

  public async pause() {
    await TrackPlayer.pause();
  }

  public async skipToPrevious() {
    await TrackPlayer.skipToPrevious();
  }

  public async skipToNext() {
    await TrackPlayer.skipToNext();
  }

  public async seekTo(value: number) {
    await TrackPlayer.seekTo(value);
  }
}

export async function playbackService() {
  TrackPlayer.addEventListener(Event.RemotePause, () => {
    TrackPlayer.pause();
  });

  TrackPlayer.addEventListener(Event.RemotePlay, () => {
    TrackPlayer.play();
  });

  TrackPlayer.addEventListener(Event.RemoteNext, () => {
    TrackPlayer.skipToNext();
  });

  TrackPlayer.addEventListener(Event.RemotePrevious, () => {
    TrackPlayer.skipToPrevious();
  });
}

export default MediaPlayer;
