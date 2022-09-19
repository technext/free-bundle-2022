import utils from "./utils";
// /*-----------------------------------------------
// |   Inline Player [plyr]
// -----------------------------------------------*/
/* eslint-disable */
function deepMerge(...sources) {
  let acc = {}
  for (const source of sources) {
    if (source instanceof Array) {
      if (!(acc instanceof Array)) {
        acc = []
      }
      acc = [...acc, ...source]
    } else if (source instanceof Object) {
      for (let [key, value] of Object.entries(source)) {
        if (value instanceof Object && key in acc) {
          value = deepMerge(acc[key], value)
        }
        acc = { ...acc, [key]: value }
      }
    }
  }
  return acc
}
const plyrInit = () => {
  if (window.Plyr) {
    const plyrs = document.querySelectorAll(".player");
    plyrs.forEach((plyr) => {
      const userOptions = utils.getData(plyr, "options");
      const defaultOptions = { captions: { active: true } };
      const options = deepMerge(defaultOptions,userOptions ? JSON.parse(userOptions) : {});
      return new window.Plyr(plyr, options);
    });
  }
};

export default plyrInit;
