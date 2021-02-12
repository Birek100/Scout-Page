const initState = {
  modalState: false
};
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "MODALTRUE":
      return { ...state, modalState: true };
    case "MODALFALSE":
      return { ...state, modalState: false };
    default:
      return state;
  }
};
export default rootReducer;
