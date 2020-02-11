const counter = (state = 0,action) => {
    switch(action.type){
        case 'plusButton':
            return state.number+1
        case 'minusButton':
            return state.number-1
        default : 
            return state
    }
}
export default counter