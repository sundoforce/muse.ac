import React from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import SubInfo from "../common/SubInfo";
// import Tags from "../common/Tags";
import Responsive from "../common/Responsive";
import Button from "../common/Button";


const EnsembleListBlock = styled(Responsive)`
  margin-top: 3rem;
`;

const CreateEnsembleButtonWrapper = styled.div`
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

const EnsembleItem = ({ ensemble }) => {
    const { title, content, id, createdAt } = ensemble;

    return (
        
        <EnsembleItemBlock>
            
            <h2>
                <Link to={`/ensembles/${id}`}>{title}</Link>

            </h2>
            <SubInfo createdAt={createdAt}
            />
            <p>{content}</p>
        </EnsembleItemBlock>
    );
};

const EnsembleList = ({ ensembles, loading, error, showWriteButton }) => {
    // 에러 발생 시
    if (error) {
        return <EnsembleList>에러가 발생했습니다.</EnsembleList>;
    }

    return (
        <EnsembleListBlock>
            <CreateEnsembleButtonWrapper>
                {showWriteButton && (
                    <Button cyan to="/write">
                        새 글 작성하기
                    </Button>
                )}
            </CreateEnsembleButtonWrapper>
            {/*  로딩 중 아니고, 포스트 배열이 존재할 때만 보여줌 */}
            {!loading && ensembles && (
                <div>
                    {ensembles.data.ensembles.map((ensemble, index) => (
                        <EnsembleItem ensemble={ensemble} key={ensemble.id} ensembleId={ensemble.id} keys={index} />
                    ))}
                </div>
            )}
        </EnsembleListBlock>
    );
};

export default EnsembleList;

