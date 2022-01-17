import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


function* fetchMenuItem(action) {
    console.log(action.payload)
    try {
        const menuItem = yield axios({
            method: 'GET',
            url: `/menuItem/${action.payload}`
        });
        
        yield put({ type: 'GET_MENU_ITEM', payload: menuItem.data });
        console.log(menuItem.data)
    } catch {
        console.log('GET MenuItem error:', err);
    }
}

function* addMenuItem(action) {
    console.log(action.payload)
    try {
        yield axios({
            method: 'POST',
            url: '/menuItem',
            data: action.payload
        })
        
        yield put({ type: 'FETCH_MENU_ITEM' });

    } catch(err) {
        console.log('POST error', err);
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
  yield takeEvery('ADD_MENU_ITEM', addMenuItem);
}

export default menuItemSaga;