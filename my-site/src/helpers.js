import { tabEnum } from "./constants/constants";
import { Colors } from "./utils/colors";

export const headerColorMapper = (tab) => {
  if (tab === tabEnum.Home) {
    return {
      backgroundColor: Colors.TeaGreenDark,
      headerFontColor: Colors.WengeLight,
      selectedHeaderColor: Colors.Wenge,
    }
  } else if (tab === tabEnum.Experiences) {
    return {
      backgroundColor: Colors.ParchmentDark,
      headerFontColor: Colors.WengeLight,
      selectedHeaderColor: Colors.Wenge,
    }
  } else if (tab === tabEnum.Projects) {
    return {
      backgroundColor: Colors.SunOrange,
      headerFontColor: Colors.NavyLight,
      selectedHeaderColor: Colors.Navy,
    }
  } else if (tab === tabEnum.Contact) {
    return {
      backgroundColor: Colors.EnglishVioletLight,
      headerFontColor: Colors.WengeLight,
      selectedHeaderColor: Colors.Wenge,
    }
  } else {
    return {
      backgroundColor: Colors.TeaGreenDark,
      headerFontColor: Colors.WengeLight,
      selectedHeaderColor: Colors.Wenge,
    }
  }
}