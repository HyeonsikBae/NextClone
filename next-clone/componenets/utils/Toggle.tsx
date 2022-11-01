import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

type ToggleProps = {
  buttons: string[];
  propFunc: Dispatch<SetStateAction<string>>;
};

type ToggleButtonProps = {
  name: string;
  propFunc: Dispatch<SetStateAction<string>>;
};

const ToggleWrapper = styled.div`
  position: relative;
  bottom: 100%;
  left: 100%;
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0 0 0;
  @media screen and (max-width: 960px) {
    flex-direction: row;
    margin: 0 0 0 0.5rem;
    left: 0;
    bottom: calc(100% + 2.2rem);
  }
`;

const ToggleButtonComponent = styled.button`
  width: 3.5rem;
  height: 2.2rem;
  margin: 0 0 0.3rem 0;
  border: 1px solid #215062;
  border-radius: 0 0.3rem 0.3rem 0;
  :hover {
    cursor: pointer;
  }
  @media screen and (max-width: 960px) {
    border-radius: 0.3rem 0.3rem 0 0;
    margin: 0 0.3rem 0 0;
  }
`;

const ToggleButton = (props: ToggleButtonProps) => {
  const { name, propFunc } = props;
  return (
    <ToggleButtonComponent onClick={() => propFunc(name)}>
      {name}
    </ToggleButtonComponent>
  );
};

const Toggle = (props: ToggleProps) => {
  const { buttons, propFunc } = props;

  const toggleButtonRender = () => {
    return buttons.map((item, i) => {
      return <ToggleButton name={item} key={i} propFunc={propFunc} />;
    });
  };

  return <ToggleWrapper>{toggleButtonRender()}</ToggleWrapper>;
};

export default Toggle;
