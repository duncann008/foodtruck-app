
import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';



function* fetchOrders() {
  try {
      const orders = yield axios.get('/orders');
      console.log('get all:', orders.data);
      yield put({ type: 'GET_ORDERS', payload: orders.data });

  } catch {
      console.log('GET orders error:', err);
  }
}


function* setOrder(action) {
  
  try {
      yield axios({
          method: 'POST',
          url: '/orders',
          data: action.payload
      })
      
      yield put({ type: 'FETCH_ORDERS' });

  } catch(err) {
      console.log('POST error', err);
  }
}

function* setOrderItems(action) {
  
  try {
      yield axios({
          method: 'POST',
          url: '/orders',
          data: action.payload
      })
      
      yield put({ type: 'FETCH_ORDERS' });

  } catch(err) {
      console.log('POST error', err);
  }
}


function* ordersSaga() {
  yield takeEvery('SET_ORDER', setOrder);
  yield takeEvery('SET_ORDER_ITEMS', setOrderItems);
  yield takeEvery('FETCH_ORDERS', fetchOrders);
}

export default ordersSaga;