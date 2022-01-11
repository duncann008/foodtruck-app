import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


function* fetchConfirmation() {
    try {
        const confirmation = yield axios.get('/confirmation');
        console.log('get all:', confirmation.data);
        yield put({ type: 'SET_CONFIRMATION', payload: confirmation.data });

    } catch {
        console.log('GET confirmation error:', err);
    }
}

function* confirmationSaga() {
  yield takeEvery('FETCH_CONFIRMATION', fetchConfirmation);
}

export default confirmationSaga;