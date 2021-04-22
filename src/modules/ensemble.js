import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
    createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as ensemblesAPI from '../lib/api/ensembles';
import { takeLatest } from 'redux-saga/effects';

const [
    READ_ENSEMBLE,
    READ_ENSEMBLE_SUCCESS,
    READ_ENSEMBLE_FAILURE,
] = createRequestActionTypes('ensemble/READ_ENSEMBLE');
const UNLOAD_ENSEMBLE = 'ensemble/UNLOAD_ENSEMBLE'; // 포스트 페이지에서 벗어날 때 데이터 비우기

export const readEnsemble = createAction(READ_ENSEMBLE, id => id);
export const unloadEnsemble = createAction(UNLOAD_ENSEMBLE);

const readEnsembleSaga = createRequestSaga(READ_ENSEMBLE, ensemblesAPI.readEnsemble);
export function* ensembleSaga() {
    yield takeLatest(READ_ENSEMBLE, readEnsembleSaga);
}

const initialState = {
    ensemble: null,
    error: null,
};

const ensemble = handleActions(
    {
        [READ_ENSEMBLE_SUCCESS]: (state, { payload: ensemble }) => ({
            ...state,
            ensemble,
        }),
        [READ_ENSEMBLE_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
        }),
        [UNLOAD_ENSEMBLE]: () => initialState,
    },
    initialState,
);

export default ensemble;
