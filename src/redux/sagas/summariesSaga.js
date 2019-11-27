import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* newSummary(action) {
    yield axios.post('/api/parent/newsummary', action.payload);
}

// function* getKidsSaga() {
//     try {
//         const kidsDataResponse = yield axios.get('/api/child');
//         console.log(kidsDataResponse.data);
        
//         yield put({type: 'SET_KIDSLIST', payload: kidsDataResponse.data});
//     } catch (error) {
//         console.log('There was an error getting kids data!', error);
//     }
// }

function* addNewSummariesSaga() {
    yield takeLatest('ADD_NEW_SUMMARY', newSummary);
    // yield takeEvery('GET_SUMMARIES', getSummariesSaga);
  }
  





  export default addNewSummariesSaga;