import * as React from 'react';
import { render } from 'react-dom'
import './App.css';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import appReducer from './ui/UIReducer';
import { bgTile } from '../assets/Assets';
import ViewscreenFrame from './ui/ViewscreenFrame';
const thunkMiddleware = require('redux-thunk')

export const store = createStore(appReducer, applyMiddleware(
    thunkMiddleware // lets us dispatch() functions
))

const styles = {
    frame: {
        height: '100vh',
        backgroundImage:'url('+bgTile+')',
        backgroundSize:'16px',
        overflow:'hidden',
        display:'flex',
        alignItems:'center',
        justifyContent: 'center'
    },
    dot: {
        height:'0.5em',
        width:'0.5em',
        borderRadius: '0.5em'
    },
    statusDot: {
        position:'absolute' as 'absolute', bottom:'0.5em', right:'0.5em',
        display:'flex',
        color: 'black',
        alignItems:'center'
    }
}

render(<Provider store={store}>
        <div style={styles.frame}>
            <ViewscreenFrame />
        </div>
       </Provider>, document.getElementById('appRoot'));
