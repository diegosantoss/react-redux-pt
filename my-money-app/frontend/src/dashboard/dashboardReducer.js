const INITIAL_STATE = { summary: {credit: 0, debt: 0}};

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case 'BILLING_SUMMARY_FETCH':
    return { ...state, summary: action.payload}
    default:
      return state;
  }
}