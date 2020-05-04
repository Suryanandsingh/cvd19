import { combineReducers } from 'redux'
import Home from './home';
import Loader from './loader';
import Notification from './notifications';
import Demographics from './demographics';
import Zone from './zone';

export default combineReducers({
    Home,
    Zone,
    Loader,
    Demographics,
    Notification
})
