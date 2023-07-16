import Education from "./education";
import Award from "./award";
import Project from "./project";
import { styled } from "styled-components";

const PortfolioList = ({ user, ownerId, isEditing }) => {
  return (
    <PortfolioListBlock>
      <Education user={user} isEditing={isEditing} ownerId={ownerId} />
      <Award user={user} isEditing={isEditing} ownerId={ownerId} />
      <Project user={user} isEditing={isEditing} ownerId={ownerId} />
    </PortfolioListBlock>
  );
};

export default PortfolioList;

const PortfolioListBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
