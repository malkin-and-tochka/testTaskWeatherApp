const initialState = {
  lang: "en",
  measure: "°F",
};
const SWITCH_LANGUAGE = "SWITCH-LANGUAGE";
export const LanguageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_LANGUAGE:
      const obj = {};
      if (state.lang === "en") {
        obj.lang = "ru";
        obj.measure = "°C";
      }
      return obj;
    default:
      return state;
  }
};

export const changeLanguage = () => ({ type: SWITCH_LANGUAGE });
