import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* newChild(action) {
    yield axios.post('/api/child/newchild', action.payload);
}

function* getKidsSaga() {
    try {
        const kidsDataResponse = yield axios.get('/');
        console.log(kidsDataResponse.data);
        
        yield put({type: 'SET_KIDSLIST', payload: kidsDataResponse.data});
    } catch (error) {
        console.log('There was an error getting kids data!', error);
    }
}

function* addNewChildSaga() {
    yield takeLatest('ADD_NEW_CHILD', newChild);
    yield takeEvery('GET_KIDS', getKidsSaga);
  }
  





  export default addNewChildSaga;