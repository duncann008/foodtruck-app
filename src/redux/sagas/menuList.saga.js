import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


function* fetchMenuList() {
    try {
        const menuList = yield axios.get('/menuList');
        console.log('get all:', menuList.data);
        yield put({ type: 'GET_MENU_LIST', payload: menuList.data });

    } catch {
        console.log('GET MenuList error:', err);
    }
}

function* setMenuList(action) {
    
  try {
      yield axios({
          method: 'POST',
          url: '/menuList',
          data: action.payload
      })
      
      yield put({ type: 'FETCH_MENU_LIST' });

  } catch(err) {
      console.log('POST error', err);
  }
}

function* editMenuList(action) {
  console.log(action.payload)
  try {
      yield axios({
          method: 'PUT',
          url: `/menuList`,
          data: action.payload
      })
      
      yield put({ type: 'FETCH_MENU_LIST' });

  } catch(err) {
      console.log('PUT error', err);
  }
}

function* deleteFromMenu(action) {
  console.log(action.payload.id)
  try {
      yield axios({
          method: 'DELETE',
          url: `/menuList/${action.payload.id}`
      })
      
      yield put({ type: 'FETCH_MENU_LIST' });

  } catch(err) {
      console.log('DELETE error', err);
  }
}

function* menuListSaga() {
  yield takeEvery('FETCH_MENU_LIST', fetchMenuList);
  yield takeEvery('EDIT_MENU_LIST', editMenuList);
  yield takeEvery('SET_MENU_LIST', setMenuList);
  yield takeEvery('DELETE_FROM_MENU', deleteFromMenu);
}

export default menuListSaga;