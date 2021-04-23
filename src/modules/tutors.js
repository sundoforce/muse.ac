import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as tutorsAPI from '../lib/api/tutors';
import { takeLatest } from 'redux-saga/effects';

const [
  LIST_TUTORS,
  LIST_TUTORS_SUCCESS,
  LIST_TUTORS_FAILURE,
] = createRequestActionTypes('tutors/LIST_TUTORS');

export const listTutors = createAction(
  LIST_TUTORS,
  ({ tag, username, page }) => ({ tag, username, page }),
);

const listTutorsSaga = createRequestSaga(LIST_TUTORS, tutorsAPI.listTutors);
export function* tutorsSaga() {
  yield takeLatest(LIST_TUTORS, listTutorsSaga);
}

const initialState = {
  tutors: null,
  error: null,
  lastPage: 1,
};

const tutors = handleActions(
  {
    [LIST_TUTORS_SUCCESS]: (state, { payload: tutors, meta: response }) => ({
      ...state,
      tutors,
      lastPage: parseInt(response.headers['last-page'], 10), // 문자열을 숫자로 변환
    }),
    [LIST_TUTORS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default tutors;
