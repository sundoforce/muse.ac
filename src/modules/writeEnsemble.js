import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as ensemblesAPI from '../lib/api/ensembles';
import { takeLatest } from 'redux-saga/effects';

const INITIALIZE = 'write/INITIALIZE'; // 모든 내용 초기화
const CHANGE_FIELD = 'write/CHANGE_FIELD'; // 특정 key 값 바꾸기
const [
  WRITE_ENSEMBLE,
  WRITE_ENSEMBLE_SUCCESS,
  WRITE_ENSEMBLE_FAILURE,
] = createRequestActionTypes('write/WRITE_ENSEMBLE'); // 포스트 작성
const SET_ORIGINAL_ENSEMBLE = 'write/SET_ORIGINAL_ENSEMBLE';
const [
  UPDATE_ENSEMBLE,
  UPDATE_ENSEMBLE_SUCCESS,
  UPDATE_ENSEMBLE_FAILURE,
] = createRequestActionTypes('write/UPDATE_ENSEMBLE'); // 포스트 수정

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const writeEnsemble = createAction(WRITE_ENSEMBLE, ({ title, body, tags }) => ({
  title,
  body,
  tags,
}));
export const setOriginalEnsemble = createAction(SET_ORIGINAL_ENSEMBLE, ensemble => ensemble);
export const updateEnsemble = createAction(
  UPDATE_ENSEMBLE,
  ({ id, title, body, tags }) => ({
    id,
    title,
    body,
    tags,
  }),
);

// saga 생성
const writeEnsembleSaga = createRequestSaga(WRITE_ENSEMBLE, ensemblesAPI.writeEnsemble);
const updateEnsembleSaga = createRequestSaga(UPDATE_ENSEMBLE, ensemblesAPI.updateEnsemble);

export function* writeSaga() {
  yield takeLatest(WRITE_ENSEMBLE, writeEnsembleSaga);
  yield takeLatest(UPDATE_ENSEMBLE, updateEnsembleSaga);
}

const initialState = {
  title: '',
  body: '',
  tags: [],
  ensemble: null,
  ensembleError: null,
  originalEnsembleId: null,
};

const write = handleActions(
  {
    [INITIALIZE]: state => initialState, // initialState를 넣으면 초기상태로 바뀜
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value, // 특정 key 값을 업데이트
    }),
    [WRITE_ENSEMBLE]: state => ({
      ...state,
      // ensemble와 ensembleError를 초기화
      ensemble: null,
      ensembleError: null,
    }),
    // 포스트 작성 성공
    [WRITE_ENSEMBLE_SUCCESS]: (state, { payload: ensemble }) => ({
      ...state,
      ensemble,
    }),
    // 포스트 작성 실패
    [WRITE_ENSEMBLE_FAILURE]: (state, { payload: ensembleError }) => ({
      ...state,
      ensembleError,
    }),
    [SET_ORIGINAL_ENSEMBLE]: (state, { payload: ensemble }) => ({
      ...state,
      title: ensemble.title,
      body: ensemble.body,
      tags: ensemble.tags,
      originalEnsembleId: ensemble._id,
    }),
    [UPDATE_ENSEMBLE_SUCCESS]: (state, { payload: ensemble }) => ({
      ...state,
      ensemble,
    }),
    [UPDATE_ENSEMBLE_FAILURE]: (state, { payload: ensembleError }) => ({
      ...state,
      ensembleError,
    }),
  },
  initialState,
);

export default write;
