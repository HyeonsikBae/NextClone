import { useState } from "react";
import styled from "styled-components";

const VisitorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 30%;
`;

const Today = styled.div`
  display: flex;
`;

const Total = styled.div`
  display: flex;
`;

const Visitor = () => {
  const [totalVisitor, setTotalVisitor] = useState(0);
  const [todayVisitor, setTodayVisitor] = useState(0);

  const Today = () => {
    return <>{`TODAY ${todayVisitor}`}</>;
  };

  const Total = () => {
    return <>{`TOTAL ${totalVisitor}`}</>;
  };

  return (
    <VisitorWrapper>
      <Today />
      {` | `}
      <Total />
    </VisitorWrapper>
  );
};

export default Visitor;
