import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { readEnsemble, unloadEnsemble } from '../../modules/ensemble';
import EnsembleViewer from '../../components/ensemble/EnsembleViewer';
import EnsembleActionButtons from '../../components/write/WriteActionButtons';
import { setOriginalEnsemble } from '../../modules/writeEnsemble';
import { removeEnsemble } from '../../lib/api/ensembles';

const EnsembleViewerContainer = ({ match, history }) => {
    // 처음 마운트될 때 포스트 읽기 API 요청
    const { ensembleId } = match.params;
    const dispatch = useDispatch();
    const { ensemble, error, loading, user } = useSelector(
        ({ ensemble, loading, user }) => ({
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

    const onEdit = () => {
        dispatch(setOriginalEnsemble(ensemble));
        history.push('/write');
    };

    const onRemove = async () => {
        try {
            await removeEnsemble(ensembleId);
            history.push('/'); // 홈으로 이동
        } catch (e) {
            console.log(e);
        }
    };


    return (
        <EnsembleViewer
            ensemble={ensemble}
            loading={loading}
            error={error}

        />
    );
};

export default withRouter(EnsembleViewerContainer);
