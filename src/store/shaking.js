// Add to cart animation state
const shaking = (state=false,action)=>{
  if(action.type==='SHAKE_SHAKE'){
    const newState = action.boolean;
    return newState;
  }else{
    return state;
  }
}
export default shaking;