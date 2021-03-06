import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import menuListSaga from './menuList.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import menuItemSaga from './menuItem.saga';
import contactInfoSaga from './contactInfo.saga';
import aboutContactSaga from './aboutContact.saga';
import ordersSaga from './order.saga';
import confirmationSaga from './confirmation.saga';
import favoritesSaga from './favorites.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    menuListSaga(),
    menuItemSaga(),
    contactInfoSaga(),
    aboutContactSaga(),
    ordersSaga(),
    confirmationSaga(),
    favoritesSaga(),
  ]);
}
