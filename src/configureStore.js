import { combineReducers, createStore} from "redux"
import colorChange from './redux/reducers/colorChange'
import counter from './redux/reducers/counter'

export default function configureStore() {
    const reducer = combineReducers({
        color : colorChange,
        nubmer : counter
    })
    return createStore(reducer)
}
