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
        // <EnsembleViewerBlock>
        //     <Helmet>
        //         <title>{title} - Muse.ac</title>
        //     </Helmet>
        //
        //             asdfasdf
        //     <EnsembleHead>
        //         <h1>{title}</h1>
        //
        //         <SubInfo
        //             title={title}
        //             createdAt={createdAt}
        //             hasMarginTop
        //         />
        //         {/*볼륨 조정 영역,*/}
        //         {/*오디오 설정,*/}
        //         {/*실시간 화이트 보드 공유 영역*/}
        //         {/*TEXT 채팅 영역*/}
        //     </EnsembleHead>
        //     {actionButtons}
        //     <EnsembleContent dangerouslySetInnerHTML={{ __html: content }} />
        // </EnsembleViewerBlock>
        <EnsembleViewerBlock>
            <EnsembleHead>
                <h1>제목</h1>
                <SubInfo>
          <span>
            <b>tester</b>
          </span>
                    <span>{new Date().toLocaleDateString()}</span>
                </SubInfo>
                <Tags>
                    <div className="tag">#태그1</div>
                    <div className="tag">#태그2</div>
                    <div className="tag">#태그3</div>
                </Tags>
            </EnsembleHead>
            <EnsembleContent
                dangerouslySetInnerHTML={{__html: '<p>HTML <b>내용</b>입니다.</p>'}}
            />
        </EnsembleViewerBlock>
    );
};

export default EnsembleViewer;
