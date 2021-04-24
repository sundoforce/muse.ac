import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import SubInfo from '../common/SubInfo';
// import Tags from '../common/Tags';
import { Helmet } from 'react-helmet-async';
import Tags from "../common/Tags";

const EnsembleViewerBlock = styled(Responsive)`
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

const EnsembleContent = styled.div`
  font-size: 1.3125rem;
  color: ${palette.gray[8]};
`;

const EnsembleViewer = ({ ensemble, error, loading, actionButtons, ownEsemble }) => {
    // 에러 발생 시
    if (error) {
        if (error.response && error.response.status === 404) {
            return <EnsembleViewerBlock>존재하지 않는 포스트입니다.</EnsembleViewerBlock>;
        }
        return <EnsembleViewerBlock>오류 발생!</EnsembleViewerBlock>;
    }

    // 로딩중이거나, 아직 포스트 데이터가 없을 시
    if (loading || !ensemble) {
        return null;
    }

    const { title, content, createdAt } = ensemble;
    return (
        <EnsembleViewerBlock>
            <Helmet>
                <title>{title} - Muse.ac</title>
            </Helmet>


            <EnsembleHead>
                <h1>{title}</h1>

                <SubInfo
                    title={title}
                    createdAt={createdAt}
                    hasMarginTop
                />
               <p> 볼륨 조정 영역,</p>
               <p> 오디오 설정,</p>
               <p> 실시간 화이트 보드 공유 영역</p>
               <p> TEXT 채팅 영역</p>
            </EnsembleHead>
            {actionButtons}
            <EnsembleContent dangerouslySetInnerHTML={{ __html: content }} />
        </EnsembleViewerBlock>
    );
};

export default EnsembleViewer;
