import NotificationHelper from './notification-helper';

const WebSocketInitiator = {
  init(url) {
    const webSocket = new WebSocket(url);
    console.log('websocket connected!');
    webSocket.onmessage = this._onMessageHandler;
  },

  _onMessageHandler(message) {
    NotificationHelper.sendNotification({
      title: 'Websocket Notification',
      options: {
        body: message.data,
        icon: 'icons/icon-192x192.png',
        image: 'https://miro.medium.com/max/200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
      },
    });
  },
};

export default WebSocketInitiator;
