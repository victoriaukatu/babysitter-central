import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* deleteKidSaga(action) {
    try{
        yield axios.delete(`/api/child/newchild/${action.payload}`);
        yield put({type: 'GET_KIDS'});
        yield put({type: 'SET_DETAILS', payload: action.payload})
      }
      catch (error) {
        console.log('error in deleteKidSaga', error);
      }
}

function* updateKidsSaga(action) {
    try{
        yield axios.put('/api/child/newchild', action.payload);
        yield put({type: 'GET_KIDS'});
        yield put({type: 'SET_DETAILS', payload: action.payload})
      }
      catch (error) {
        console.log('error in updateKidsSaga', error);
      }
}


function* updateSaga() {
    yield takeEvery('UPDATE_DETAILS', updateKidsSaga);
    yield takeEvery('DELETE_KID', deleteKidSaga);

}


export default updateSaga;