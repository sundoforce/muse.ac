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

const createRoomButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;

const RoomItemBlock = styled.div`
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

const RoomItem = ({ room }) => {
    const { publishedDate, user, tags, title, body, _id } = room;

    return (
        
        <RoomItemBlock>
            
            <h2>
                <Link to={`/@${user.username}/${_id}`}>{title}</Link>
            </h2>
            <SubInfo
                username={user.username}
                publishedDate={new Date(publishedDate)}
            />
            <Tags tags={tags} />
            <p>{body}</p>
        </RoomItemBlock>
    );
};

const EnsembleList = ({ rooms, loading, error, showWriteButton }) => {
    // 에러 발생 시
    if (error) {
        return <EnsembleList>에러가 발생했습니다.</EnsembleList>;
    }

    return (
        <EnsembleListBlock>
            <li>방 아이디1 <Link to="/Ensemble/1">ddd</Link><Button cyan to="/Ensemble/1">Join</Button></li>
            <li>방 아이디 2<Link to="/Ensemble/2">ddd</Link><Button cyan to="/Ensemble/2">Join</Button></li>
            <li>방 아이디 3<Link to="/Ensemble/4">ddd</Link><Button cyan to="/Ensemble/3">Join</Button></li>
            <li>방 아이디 4<Link to="/Ensemble/5">ddd</Link><Button cyan to="/Ensemble/4">Join</Button></li>
            <li>방 아이디 5<Link to="/Ensemble/6">ddd</Link><Button cyan to="/Ensemble/5">Join</Button></li>

            <createRoomButtonWrapper>
                {showWriteButton && (
                    <Button cyan to="/write">
                        새 글 작성하기
                    </Button>
                )}
            </createRoomButtonWrapper>
            {/*  로딩 중 아니고, 포스트 배열이 존재할 때만 보여줌 */}
            {!loading && rooms && (
                <div>
                    {rooms.map((room) => (
                        <RoomItem room={room} key={room._id} />
                    ))}
                </div>
            )}
        </EnsembleListBlock>
    );
};

export default EnsembleList;

