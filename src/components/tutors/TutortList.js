import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import palette from '../../lib/styles/palette';
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';
import { Link } from 'react-router-dom';

const TutorListBlock = styled(Responsive)`
  margin-top: 3rem;
`;

const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;

  .parent{
    width: 90%;
    margin: 10px auto;
    display: flex;
  }

  .first {
    border: 1px solid red;
    flex:1;
    width:30%;
    box-sizing: border-box;
  }

  .second{
    border: 1px solid green;
    flex:1;
    margin: 0px 5%;
    width:30%;
    box-sizing: border-box;
  }

  .third{
    border: 1px solid blue;
    flex:1;
    width:30%;
    box-sizing: border-box;
  }
`;

const TutorItemBlock = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  /* 맨 위 포스트는 padding-top 없음 */
  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid ${palette.gray[2]};
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 0;
    &:hover {
      color: ${palette.gray[6]};
    }
  }
  p {
    margin-top: 2rem;
  }
`;

const TutorItem = ({ post }) => {
  const { publishedDate, user, tags, title, body, _id } = post;

  return (
    <TutorItemBlock>
      <h2>
        <Link to={`/@${user.username}/${_id}`}>{title}</Link>
      </h2>
      <SubInfo
        username={user.username}
        publishedDate={new Date(publishedDate)}
      />
      <Tags tags={tags} />
      <p>{body}</p>
    </TutorItemBlock>
  );
};

const PostList = ({ posts, loading, error, showWriteButton }) => {

  // 에러 발생 시
  if (error) {
    return <TutorListBlock>에러가 발생했습니다.</TutorListBlock>;
  }

  return (
    <TutorListBlock>
      <WritePostButtonWrapper>
        {showWriteButton && (
          <Button cyan to="/write">
            새 글 작성하기
          </Button>
        )}
      </WritePostButtonWrapper>
      {/*  로딩 중 아니고, 포스트 배열이 존재할 때만 보여줌 */}
      {!loading && posts && (
        <div>
          {posts.map((post) => (
            <TutorItem post={post} key={post._id} />
          ))}
        </div>
      )}
        <p><b>TODO</b></p>
        튜터(렛슨 선생님)목록 <br/>
        렛슨 선생님 선택<br/>
        학생 개인 렛슨 입장 <br/>
        선생님 커리큘럼 <br/>
        샘플 영상<br/>

        <li>강의실 입장<Link to="/tutor/1">ddd</Link><Button cyan to="/tutor/1">Join</Button></li>

    </TutorListBlock>
  );
};

export default PostList;
