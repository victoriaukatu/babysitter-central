import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* newChild(action) {
    yield axios.post('/', action.payload);
}

function* addNewChildSaga() {
    yield takeLatest('ADD_NEW_CHILD', newChild);
  }
  




  
  export default addNewChildSaga;