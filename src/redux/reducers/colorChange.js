const colorChange = (state='red',action) => {
    switch(action.type){
        case 'colorButton':
            return action.color
        default :
            return state;
    }

}
export default colorChange