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

function* menuItemSaga() {
  yield takeEvery('FETCH_MENU_ITEM', fetchMenuItem);
}

export default menuItemSaga;