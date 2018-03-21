import createStore from "redux"
import rootReducer from './reducers'



const storeHello = createStore(rootReducer)

storeHello.subscribe(()=> {
   nsole.log("Weeeeeeee")
});



storeHello.dispatch({type: "INC", payload: 1});
storeHello.dispatch({type: "INC", payload: 1});
storeHello.dispatch({type: "INC", payload: 1});
storeHello.dispatch({type: "INC", payload: 1});

export default storeHello
