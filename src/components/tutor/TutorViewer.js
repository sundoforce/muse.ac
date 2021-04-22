import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';
import { Helmet } from 'react-helmet-async';

const EnsembleBlock = styled(Responsive)`
  margin-top: 4rem;
`;
const EnsembleHead = styled.div`
  border-bottom: 1px solid ${palette.gray[2]};
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
  }
`;

const TutorContent = styled.div`
  font-size: 1.3125rem;
  color: ${palette.gray[8]};
`;

const EnsembleViewer = ({ post, error, loading, actionButtons, ownPost }) => {
    // 에러 발생 시
    if (error) {
        if (error.response && error.response.status === 404) {
           // return <EnsembleBlock>존재하지 않는 포스트입니다.</EnsembleBlock>;
        }
        // return <EnsembleBlock>오류 발생!</EnsembleBlock>;
    }

    // 로딩중이거나, 아직 포스트 데이터가 없을 시
    if (loading || !post) {
        return null;
    }

    const { title, body, user, publishedDate, tags } = post;
    return (
        <EnsembleBlock>
            <Helmet>
                <title>{title} - Muse.ac</title>
            </Helmet>

            <EnsembleHead>
                <h1>{title}</h1>
                <SubInfo
                    username={user.username}
                    publishedDate={publishedDate}
                    hasMarginTop
                />
                <Tags tags={tags} />
            </EnsembleHead>
            {actionButtons}
            <TutorContent dangerouslySetInnerHTML={{ __html: body }} />
        </EnsembleBlock>
    );
};

export default EnsembleViewer;
