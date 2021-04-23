import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { readEnsemble, unloadEnsemble } from '../../modules/ensemble';
import EnsembleViewer from '../../components/ensemble/EnsembleViewer';

const EnsembleViewerContainer = ({ match, history }) => {
    // 처음 마운트될 때 포스트 읽기 API 요청
    const { ensembleId } = match.params;
    const dispatch = useDispatch();
    const { ensemble, error, loading } = useSelector(
        ({ ensemble, loading }) => ({
            ensemble: ensemble,
            error: ensemble,
            loading: loading['ensemble/READ_POST'],
        }),
    );

    useEffect(() => {
        dispatch(readEnsemble(ensembleId));
        // 언마운트될 때 리덕스에서 포스트 데이터 없애기
        return () => {
            dispatch(unloadEnsemble());
        };
    }, [dispatch, ensembleId]);


    return (
        <EnsembleViewer
            ensemble={ensemble}
            loading={loading}
            error={error}

        />
    );
};

export default withRouter(EnsembleViewerContainer);
