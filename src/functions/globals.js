const scrollToElement = (destination) => {
  const element = document.querySelector(destination);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
const snapToElement = (destination) => {
  const element = document.querySelector(destination);
  if (element) {
    element.scrollIntoView(true);
  }
};
const getImgURL = (imageName) => {
  return require("@/assets/" + imageName);
};
const getPdfURL = (fileName) => {
  return require("@/assets/" + fileName).default;
};

module.exports.scrollToElement = scrollToElement;
module.exports.snapToElement = snapToElement;
module.exports.getImgURL = getImgURL;
module.exports.getPdfURL = getPdfURL;
