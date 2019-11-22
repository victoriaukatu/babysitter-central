import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* updateKidsSaga(action) {
    try{
        yield axios.put('/api/child/newchild', action.payload);
        yield put({type: 'GET_KIDS'});
        yield put({type: 'SET_DETAILS', payload: action.payload})
      }
      catch (error) {
        console.log('error in updateSaga', error);
      }
}


function* updateSaga() {
    yield takeEvery('UPDATE_DETAILS', updateKidsSaga);
}


export default updateSaga;