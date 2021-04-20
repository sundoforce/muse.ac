import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';
import { Helmet } from 'react-helmet-async';

const PlayRoomViewerBlock = styled(Responsive)`
  margin-top: 4rem;
`;
const PlayRoomHead = styled.div`
  border-bottom: 1px solid ${palette.gray[2]};
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
  }
`;

const PlayRoomContent = styled.div`
  font-size: 1.3125rem;
  color: ${palette.gray[8]};
`;

const PlayRoomViewer = ({ post, error, loading, actionButtons, ownPost }) => {
    // 에러 발생 시
    if (error) {
        if (error.response && error.response.status === 404) {
            return <PlayRoomViewerBlock>존재하지 않는 포스트입니다.</PlayRoomViewerBlock>;
        }
        return <PlayRoomViewerBlock>오류 발생!</PlayRoomViewerBlock>;
    }

    // 로딩중이거나, 아직 포스트 데이터가 없을 시
    if (loading || !post) {
        return null;
    }

    const { title, body, user, publishedDate, tags } = post;
    return (
        <PlayRoomViewerBlock>
            <Helmet>
                <title>{title} - Muse.ac</title>
            </Helmet>

            ㅁㅁㄴㅇㄹㄴㅁㅇㄹ
            <PlayRoomHead>
                <h1>{title}</h1>

                <SubInfo
                    username={user.username}
                    publishedDate={publishedDate}
                    hasMarginTop
                />
                <Tags tags={tags} />
            </PlayRoomHead>
            {actionButtons}
            <PlayRoomContent dangerouslySetInnerHTML={{ __html: body }} />
        </PlayRoomViewerBlock>
    );
};

export default PlayRoomViewer;
