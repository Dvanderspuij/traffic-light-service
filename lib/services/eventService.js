'use strict'

class EventService {
  constructor(database) {
    this.database = $database;
  }

  function storeEvent(event) {
    return this.database('events').insert(event);
  }

  function readScore() {
    return this.database.('events')
      .avg('score as averageScore')
      .count('event_id')
      .where('event', 'buttonPressed');
  }
}

module.exports = EventService;
