// server.js
const express = require('express');
const bodyParser = require('body-parser');
const webpush = require('web-push');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const publicVapidKey = 'BJ6W62-u0jKJorsYGvZElMXpocFnaz5_ma9oGl_o1J6GQxly_OYzFvYduIessmEU4-7kfFL7_qBF2kKEXDL9DCM';
const privateVapidKey = 'XM5xWcEB7Qg2muN743z9DCFnoRFUOHbxY8ZubwghBDY';
webpush.setVapidDetails('arikpostanley123@gmail.com', publicVapidKey, privateVapidKey);

let subscriptions = [];  // Store active subscriptions

// Endpoint to subscribe to push notifications
app.post('/subscribe', (req, res) => {
  const subscription = req.body;
  subscriptions.push(subscription);
  res.status(201).json({});
});

// Endpoint to unsubscribe from push notifications
app.post('/unsubscribe', (req, res) => {
  const subscription = req.body;
  subscriptions = subscriptions.filter(sub => sub.endpoint !== subscription.endpoint);
  res.status(200).json({});
});

// Endpoint to send a push notification
app.post('/send-notification', (req, res) => {
  const payload = JSON.stringify({
    title: 'Hello from PWA!',
    body: 'You have enabled notifications.',
  });

  Promise.all(
    subscriptions.map(sub => webpush.sendNotification(sub, payload).catch(err => console.error(err)))
  )
    .then(() => res.status(200).json({ message: 'Notification sent!' }))
    .catch(error => res.status(500).json({ error }));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
