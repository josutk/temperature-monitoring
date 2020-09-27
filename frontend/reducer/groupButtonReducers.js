
export default (state, action = {}) => {
    console.log('choooommou', action.type)
    switch(action.type){
        case 1:
            return 1
        case 2:
            return 2
        default:
            return 1
    }
}