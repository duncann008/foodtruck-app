import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* fetchFavorites() {
  console.log('qnkjqnefkewefknwkfn')
    try {
        const favorites = yield axios({
            method: 'GET',
            url: '/favorites'
        });
        console.log(favorites.data)
        yield put({ type: 'GET_FAVORITES', payload: favorites.data });

    } catch (err) {
        console.log('GET error:', err);
    }
}


function* setFavorite(action) {
    try {
        yield axios({
            method: 'POST',
            url: '/favorites',
            data: action.payload
        })
        
        yield put({ type: 'FETCH_FAVORITES' });

    } catch(err) {
        console.log('POST error', err);
    }
}

function* deleteFavorite(action) {
    try {
        yield axios({
            method: 'DELETE',
            url: `/favorites/${action.payload}`,
            data: action.payload
        })
        
        yield put({ type: 'FETCH_FAVORITES' });

    } catch(err) {
        console.log('DELETE error', err);
    }
}


function* favoritesSaga() {
  yield takeEvery('FETCH_FAVORITES', fetchFavorites);
  yield takeEvery('SET_FAVORITES', setFavorite);
  yield takeEvery('DELETE_FAVORITE', deleteFavorite);

}

export default favoritesSaga;