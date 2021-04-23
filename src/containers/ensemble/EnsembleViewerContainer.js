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
    const { ensembles, error, loading, user } = useSelector(
        ({ ensembles, loading, user }) => ({
            ensembles: ensembles.ensembles,
            error: ensembles.ensembles,
            loading: loading['ensembles/READ_POST'],
            user: user.user,
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
        dispatch(setOriginalEnsemble(ensembles));
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

    const ownEnsemble = (user && user._id) === (ensembles && ensembles.user._id);

    return (
        <EnsembleViewer
            ensembles={ensembles}
            loading={loading}
            error={error}
            actionButtons={
                ownEnsemble && <EnsembleActionButtons onEdit={onEdit} onRemove={onRemove} />
            }
        />
    );
};

export default withRouter(EnsembleViewerContainer);
