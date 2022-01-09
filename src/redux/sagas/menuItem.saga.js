import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


function* fetchMenuItem(action) {
    
    try {
        const menuItem = yield axios({
            method: 'GET',
            url: `/menuItem/${action.payload}`
        });
        
        yield put({ type: 'SET_MENU_ITEM', payload: menuItem.data });

    } catch {
        console.log('GET MenuItem error:', err);
    }
}

function* editMenuItem(action) {
    
    try {
        yield axios({
            method: 'PUT',
            url: `/menuItem`,
            data: action.payload
        })
        
        yield put({ type: 'FETCH_MENU_ITEM' });

    } catch(err) {
        console.log('PUT error', err);
    }
}

function* menuItemSaga() {
  yield takeEvery('FETCH_MENU_ITEM', fetchMenuItem);
  yield takeEvery('EDIT_MENU_ITEM', editMenuItem);
}

export default menuItemSaga;