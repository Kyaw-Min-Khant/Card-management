export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCT":return{...state,products:action.payload};
    case "ADD_TO_CART":
      const existed=state.card.find(item=>item.id===action.payload.id)
    if(existed){
return state
    }else{
      return { ...state, card: [...state.card, { ...action.payload }] };
    }
    default:
      return state;
  }
};