import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* fetchAboutContact() {
    try {
        const aboutContact = yield axios({
            method: 'GET',
            url: `/aboutContact`
        });
        yield put({ type: 'SET_ABOUT_CONTACT', payload: aboutContact.data });

    } catch (err) {
        console.log('GET Contact Info error:', err);
    }
}


function* setAboutContact(action) {
    try {
        yield axios({
            method: 'POST',
            url: '/aboutContact',
            data: action.payload
        })
        
        yield put({ type: 'FETCH_ABOUT_CONTACT' });

    } catch(err) {
        console.log('POST error', err);
    }
}

function* editAboutContact(action) {
    try {
        yield axios({
            method: 'PUT',
            url: `/aboutContact`,
            data: action.payload
        })
        
        yield put({ type: 'FETCH_ABOUT_CONTACT' });

    } catch(err) {
        console.log('PUT error', err);
    }
}


function* aboutContactSaga() {
  yield takeEvery('FETCH_ABOUT_CONTACT', fetchAboutContact);
  // yield takeEvery('SET_ABOUT_CONTACT', setAboutContact);
  yield takeEvery('EDIT_ABOUT_CONTACT', editAboutContact);

}

export default aboutContactSaga;