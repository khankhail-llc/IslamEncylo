import surah01 from '../surahText/surah_01.ts';
import surah02 from '../surahText/surah_02.ts';

const getSurahText = (surah: number) => {
  switch (surah) {
    case 1:
      return surah01;
    case 2:
      return surah02;
    // case 3:
    //   return surah03;
    // case 4:
    //   return surah04;
    // case 5:
    //   return surah05;
    // case 6:
    //   return surah06;
    // case 7:
    //   return surah07;
    // case 8:
    //   return surah08;
    // case 9:
    //   return surah09;
    // case 10:
    //   return surah10;
    // case 11:
    //   return surah11;
    // case 12:
    //   return surah12;
    // case 13:
    //   return surah13;
    // case 14:
    //   return surah14;
    // case 15:
    //   return surah15;
    // case 16:
    //   return surah16;
    // case 17:
    //   return surah17;
    // case 18:
    //   return surah18;
    // case 19:
    //   return surah19;
    // case 20:
    //   return surah20;
    // case 21:
    //   return surah21;
    // case 22:
    //   return surah22;
    // case 23:
    //   return surah23;
    // case 24:
    //   return surah24;
    // case 25:
    //   return surah25;
    // case 26:
    //   return surah26;
    // case 27:
    //   return surah27;
    // case 28:
    //   return surah28;
    // case 29:
    //   return surah29;
    // case 30:
    //   return surah30;
    // case 31:
    //   return surah31;
    // case 32:
    //   return surah32;
    // case 33:
    //   return surah33;
    // case 34:
    //   return surah34;
    // case 35:
    //   return surah35;
    // case 36:
    //   return surah36;
    // case 37:
    //   return surah37;
    // case 38:
    //   return surah38;
    // case 39:
    //   return surah39;
    // case 40:
    //   return surah40;
    // case 41:
    //   return surah41;
    // case 42:
    //   return surah42;
    // case 43:
    //   return surah43;
    // case 44:
    //   return surah44;
    // case 45:
    //   return surah45;
    // case 46:
    //   return surah46;
    // case 47:
    //   return surah47;
    // case 48:
    //   return surah48;
    // case 49:
    //   return surah49;
    // case 50:
    //   return surah50;
    // case 51:
    //   return surah51;
    // case 52:
    //   return surah52;
    // case 53:
    //   return surah53;
    // case 54:
    //   return surah54;
    // case 55:
    //   return surah55;
    // case 56:
    //   return surah56;
    // case 57:
    //   return surah57;
    // case 58:
    //   return surah58;
    // case 59:
    //   return surah59;
    // case 60:
    //   return surah60;
    // case 61:
    //   return surah61;
    // case 62:
    //   return surah62;
    // case 63:
    //   return surah63;
    // case 64:
    //   return surah64;
    // case 65:
    //   return surah65;
    // case 66:
    //   return surah66;
    // case 67:
    //   return surah67;
    // case 68:
    //   return surah68;
    // case 69:
    //   return surah69;
    // case 70:
    //   return surah70;
    // case 71:
    //   return surah71;
    // case 72:
    //   return surah72;
    // case 73:
    //   return surah73;
    // case 74:
    //   return surah74;
    // case 75:
    //   return surah75;
    // case 76:
    //   return surah76;
    // case 77:
    //   return surah77;
    // case 78:
    //   return surah78;
    // case 79:
    //   return surah79;
    // case 80:
    //   return surah80;
    // case 81:
    //   return surah81;
    // case 82:
    //   return surah82;
    // case 83:
    //   return surah83;
    // case 84:
    //   return surah84;
    // case 85:
    //   return surah85;
    // case 86:
    //   return surah86;
    // case 87:
    //   return surah87;
    // case 88:
    //   return surah88;
    // case 89:
    //   return surah89;
    // case 90:
    //   return surah90;
    // case 91:
    //   return surah91;
    // case 92:
    //   return surah92;
    // case 93:
    //   return surah93;
    // case 94:
    //   return surah94;
    // case 95:
    //   return surah95;
    // case 96:
    //   return surah96;
    // case 97:
    //   return surah97;
    // case 98:
    //   return surah98;
    // case 99:
    //   return surah99;
    // case 100:
    //   return surah100;
    // case 101:
    //   return surah101;
    // case 102:
    //   return surah102;
    // case 103:
    //   return surah103;
    // case 104:
    //   return surah104;
    // case 105:
    //   return surah105;
    // case 106:
    //   return surah106;
    // case 107:
    //   return surah107;
    // case 108:
    //   return surah108;
    // case 109:
    //   return surah109;
    // case 110:
    //   return surah110;
    // case 111:
    //   return surah111;
    // case 112:
    //   return surah112;
    // case 113:
    //   return surah113;
    // case 114:
    //   return surah114;
    default:
      throw new Error(`Surah not found check Mapping Data: ${surah}`);
  }
};

export default getSurahText;
