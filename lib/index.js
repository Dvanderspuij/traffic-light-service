const express = require('express');
const EventService = require('./services/eventService');
const ButtonPressedEvent = require('./events/buttonPressedEvent');

const knex = require('knex');
const config = require('./../etc/config.json');
const eventService = createEventService(config);
const app = express();


app.get('/', function (req, res) {

  return eventService.readScore().then(([{averageScore:score}]) => {
    res.send('score:' + score);
  });
});

app.get('/button/:button', function (req, res) {
  const event = new ButtonPressedEvent(req.params.button);
  const now = new Date().toISOString();

  let buttonColor, data, score;
  buttonColor = event.button.toUpperCase();

  switch (buttonColor) {
    case 'GREEN':
      score = 100;
      break;
    case 'YELLOW':
      score = 50;
      break;
    case 'RED':
      score = 0;
      break;
    default:
     score = 0;
     break;
  }

  data = {score, name: 'buttonPressed', now};
  eventService.storeEvent(data).then((result) => {
    res.send(Object.assign({result}, data));

  });
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


function createEventService(config) {
  const db = knex({
    client: 'mysql',
    connection: config.database
  });

  return new EventService(db);
}
