import React from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import SubInfo from "../common/SubInfo";
import Tags from "../common/Tags";
import Responsive from "../common/Responsive";
import Button from "../common/Button";


const EnsembleListBlock = styled(Responsive)`
  margin-top: 3rem;
`;

const createEnsembleButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;

const EnsembleItemBlock = styled.div`
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

const EnsembleItem = ({ room }) => {
    const { publishedDate, user, tags, title, body, _id } = room;

    return (
        
        <EnsembleItemBlock>
            
            <h2>
                <Link to={`/@${user.username}/${_id}`}>{title}</Link>
            </h2>
            <SubInfo
                username={user.username}
                publishedDate={new Date(publishedDate)}
            />
            <Tags tags={tags} />
            <p>{body}</p>
        </EnsembleItemBlock>
    );
};

const EnsembleList = ({ id, loading, error, showWriteButton }) => {
    // 에러 발생 시
    if (error) {
        return <EnsembleList>에러가 발생했습니다.</EnsembleList>;
    }

    return (
        <EnsembleListBlock>
            <createEnsembleButtonWrapper>
                {showWriteButton && (
                    <Button cyan to="/write">
                        새 글 작성하기
                    </Button>
                )}
            </createEnsembleButtonWrapper>
            {/*  로딩 중 아니고, 포스트 배열이 존재할 때만 보여줌 */}
            {!loading && id && (
                <div>
                    {id.map((room) => (
                        <EnsembleItem room={room} key={room._id} />
                    ))}
                </div>
            )}
        </EnsembleListBlock>
    );
};

export default EnsembleList;

