import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


function* fetchUserContactInfo(action) {
    console.log(action);
    try {
        const contactInfo = yield axios({
            method: 'GET',
            url: `/contactInfo/${action.payload}`
        });
        console.log('get contact info:', contactInfo.data);
        yield put({ type: 'SET_CONTACT_INFO', payload: contactInfo.data });

    } catch {
        console.log('GET Contact Info error:', err);
    }
}


function* setContactInfo(action) {
    try {
        yield axios({
            method: 'POST',
            url: '/contactInfo',
            data: action.payload
        })
        
        yield put({ type: 'FETCH_CONTACT_INFO' });

    } catch {
        console.log('POST error');
    }
}

function* contactInfoSaga() {
  yield takeEvery('FETCH_CONTACT_INFO', fetchUserContactInfo);
  yield takeEvery('SET_CONTACT_INFO', setContactInfo);
}

export default contactInfoSaga;