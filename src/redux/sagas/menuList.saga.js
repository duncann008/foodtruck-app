import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


function* fetchMenuList() {
    try {
        const menuList = yield axios.get('/menuList');
        console.log('get all:', menuList.data);
        yield put({ type: 'SET_MENU_LIST', payload: menuList.data });

    } catch {
        console.log('GET MenuList error:', err);
    }
}

function* menuListSaga() {
  yield takeEvery('FETCH_MENU_LIST', fetchMenuList);
}

export default menuListSaga;