import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as ensemblesAPI from '../lib/api/ensemble';
import { takeLatest } from 'redux-saga/effects';

const [
  LIST_ENSEMBLE,
  LIST_ENSEMBLE_SUCCESS,
  LIST_ENSEMBLE_FAILURE,
] = createRequestActionTypes('ensemble/LIST_ENSEMBLE');

export const listEnsemble = createAction(
  LIST_ENSEMBLE,
  ({ tag, username, page }) => ({ tag, username, page }),
);

const listEnsembleSaga = createRequestSaga(LIST_ENSEMBLE, ensemblesAPI.listEnsemble);
export function* ensemblesSaga() {
  yield takeLatest(LIST_ENSEMBLE, listEnsembleSaga);
}

const initialState = {
  ensemble: null,
  error: null,
  lastPage: 1,
};

const ensemble = handleActions(
  {
    [LIST_ENSEMBLE_SUCCESS]: (state, { payload: ensemble, meta: response }) => ({
      ...state,
      ensemble,
      lastPage: parseInt(response.headers['last-page'], 10), // 문자열을 숫자로 변환
    }),
    [LIST_ENSEMBLE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default ensemble;
