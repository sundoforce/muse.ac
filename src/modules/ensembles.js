import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as ensemblesAPI from '../lib/api/ensembles';
import { takeLatest } from 'redux-saga/effects';

const [
  LIST_ENSEMBLS,
  LIST_ENSEMBLS_SUCCESS,
  LIST_ENSEMBLS_FAILURE,
] = createRequestActionTypes('ensembles/LIST_ENSEMBLS');

export const listEnsembles = createAction(
    LIST_ENSEMBLS,
  ({ tag, username, page }) => ({ tag, username, page }),
);

const listEnsemblesSaga = createRequestSaga(LIST_ENSEMBLS, ensemblesAPI.listEnsembles);
export function* ensemblesSaga() {
  yield takeLatest(LIST_ENSEMBLS, listEnsemblesSaga);
}

const initialState = {
  ensembles: null,
  error: null,
  lastPage: 1,
};

const ensembles = handleActions(
  {
    [LIST_ENSEMBLS_SUCCESS]: (state, { payload: ensembles, meta: response }) => ({
      ...state,
      ensembles,
      lastPage: parseInt(response.headers['last-page'], 10), // 문자열을 숫자로 변환
    }),
    [LIST_ENSEMBLS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default ensembles;
