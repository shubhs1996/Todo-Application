import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware,compose} from 'redux'
import {Provider} from 'react-redux'
import {reactReduxFirebase,getFirebase} from 'react-redux-firebase'
import {reduxFirestore,getFirestore} from 'redux-firestore'
import rootReducer from './store/reducers/rootreducer';
import thunk from 'redux-thunk'
import fbConfig from './config/fbConfig'

const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true,
    attachAuthIsReady:true// Firestore for Profile instead of Realtime DB
    // enableClaims: true // Get custom claims along with the profile
  }

const composeEnhancers = process.env.NODE_ENV === 'development'? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;
const store=createStore(rootReducer,
    composeEnhancers(applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reactReduxFirebase(fbConfig,rrfConfig),
    reduxFirestore(fbConfig)
    )
    
);

store.firebaseAuthIsReady.then(()=>{
  ReactDOM.render(<Provider store={store}><App /></Provider>,document.getElementById('root'));
  serviceWorker.register();
})


