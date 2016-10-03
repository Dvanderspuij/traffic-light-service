'use strict'

class ButtonPressedEvent {
  constructor(buttonName) {
    this.dateTime = new Date().toISOString();
    this.button = buttonName;
  }
}

module.exports = ButtonPressedEvent
