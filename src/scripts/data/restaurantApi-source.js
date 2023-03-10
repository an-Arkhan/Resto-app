import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async restoList() {
    const response = await fetch(API_ENDPOINT.RESTO_LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async bahanMakan() {
    const response = await fetch(API_ENDPOINT.BAHAN_LIST);
    const responseJson = await response.json();
    return responseJson.categories;
  }
}

export default RestaurantSource;
