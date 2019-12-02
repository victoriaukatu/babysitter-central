import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* newSummary(action) {
    yield axios.post('/api/parent/newsummary', action.payload);
    yield put({ type: 'GET_SUMMARIES'});
}

function* getSummariesSaga() {
    try {
        const summaryDataResponse = yield axios.get('/api/parent');
        console.log(summaryDataResponse.data);
        
        yield put({type: 'SET_SUMMARIES', payload: summaryDataResponse.data});
    } catch (error) {
        console.log('There was an error getting summary data!', error);
    }
}

function* addNewSummariesSaga() {
    yield takeLatest('ADD_NEW_SUMMARY', newSummary);
    yield takeEvery('GET_SUMMARIES', getSummariesSaga);
  }
  





  export default addNewSummariesSaga;