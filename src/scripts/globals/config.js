const CONFIG = {
  KEY: 'YOUR_API_KEY',
  BASE_URL: 'https://restaurant-api.dicoding.dev/',
  BASE_IMAGE_URL: 'https://restaurant-api.dicoding.dev/images/medium/',
  BASE_BAHAN_URL: 'https://www.themealdb.com/api/json/v1/1/categories.php',
  DEFAULT_LANGUAGE: 'en-us',
  CACHE_NAME: new Date().toISOString(),
  DATABASE_NAME: 'resto-pwa-idb',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'restos',
  WEB_SOCKET_SERVER: 'wss://javascript.info/article/websocket/chat/ws',
};

export default CONFIG;
