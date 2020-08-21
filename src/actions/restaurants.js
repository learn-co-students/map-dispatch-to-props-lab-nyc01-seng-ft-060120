export const addRestaurant = (restaurant) => { //action to send to reducer when form is submitted 
  return {
    type: 'ADD_RESTAURANT',
    restaurant
  };
};
