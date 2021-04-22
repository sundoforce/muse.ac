import React, { useEffect } from 'react';
import qs from 'qs';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import EnsembleList from '../../components/ensembles/EnsembleList';
import { listEnsembles } from '../../modules/ensembles';

const EnsembleListContainer = ({ location, match }) => {
  const dispatch = useDispatch();
  const { ensembles, error, loading, user } = useSelector(
      ({ ensembles, loading, user }) => ({
        ensembles: ensembles.ensembles,
        error: ensembles.error,
        loading: loading['ensembles/LIST_ENSEMBLE'],
        user: user.user,
      }),
  );
  useEffect(() => {
    const { username } = match.params;
    const { tag, page } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    dispatch(listEnsembles({ tag, username, page }));
  }, [dispatch, location.search, match.params]);

  return (
      <EnsembleList
          loading={loading}
          error={error}
          ensembles={ensembles}
          showWriteButton={user}
      />
  );
};

export default withRouter(EnsembleListContainer);
