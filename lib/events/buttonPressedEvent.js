'use strict'

class ButtonPressedEvent {
  constructor(color) {
    this.dateTime = new Date().toISOString();
    this.color = color;
  }
}

module.exports = ButtonPressedEvent
