import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
//// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield takeLatest("API_CALL_REQUEST", workerSaga);
}

//// worker saga: makes the api call when watcher saga sees the action

// saga 内部有自动执行Generator 执行器
function* workerSaga() {
  try {
    console.info("调用第一个yield之前")  
    const response = yield call(fetchDog);
    console.info("调用第一个yield之后，第二个yield之前")  
    const dog = response.data.message;
    // dispatch a success action to the store with the new dog
    yield put({ type: "API_CALL_SUCCESS", dog });
    console.info("第二个yield之后")  
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: "API_CALL_FAILURE", error });
  }
}

// function that makes the api request and returns a Promise for response
function fetchDog() {
  return axios({
    method: "get",
    url: "https://dog.ceo/api/breeds/image/random"
  });
}
