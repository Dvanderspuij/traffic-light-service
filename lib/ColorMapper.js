'use strict'

class ColorMapper {
  constructor(colorMap) {
    this.colorMap = colorMap;
  }

  getRgbGreen() {
   return this.colorMap.green.rgb;
  }

  getRgbRed() {
   return this.colorMap.red.rgb;
  }

  getRgbYellow() {
    return this.colorMap.yellow.rgb;
  }

  calculateColorByScore(score) {
    if (score > 75) {

      return this.getRgbGreen();
    }
    else if (score >= 50) {

      return this.getRgbYellow();
    }

    return this.getRgbRed();
  }

}

module.exports = ColorMapper
