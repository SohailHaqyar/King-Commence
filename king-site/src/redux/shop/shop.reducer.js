import SHOP_DATA  from './shop.data'
const intiState = {
   collections: SHOP_DATA
};
const shopReducer = (state=intiState , action) => {
   switch(action.payload){
      default:
         return state;
   }
}
export default shopReducer 