import { produceWithPatches } from "immer";
import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { skyblue } from "../../theme/theme";

type ToggleProps = {
  buttons: string[];
  selected: string;
  propFunc: Dispatch<SetStateAction<string>>;
};

type ToggleButtonProps = {
  name: string;
  selected: boolean;
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

const ToggleButtonComponent = styled.button<{ selected: boolean }>`
  width: 3.5rem;
  height: 2.2rem;
  margin: 0 0 0.3rem 0;
  border: 1px solid #215062;
  border-radius: 0 0.3rem 0.3rem 0;
  :hover {
    cursor: pointer;
  }
  background-color: ${(props) => (props.selected ? `white` : skyblue)};
  color: ${(props) => (props.selected ? `black` : `white`)};
  @media screen and (max-width: 960px) {
    border-radius: 0.3rem 0.3rem 0 0;
    margin: 0 0.3rem 0 0;
  }
`;

const ToggleButton = (props: ToggleButtonProps) => {
  const { name, selected, propFunc } = props;
  return (
    <ToggleButtonComponent selected={selected} onClick={() => propFunc(name)}>
      {name}
    </ToggleButtonComponent>
  );
};

const Toggle = (props: ToggleProps) => {
  const { buttons, selected, propFunc } = props;

  const toggleButtonRender = () => {
    return buttons.map((item, i) => {
      console.log(`${item} ${selected}`);
      return (
        <ToggleButton
          name={item}
          selected={item === selected}
          key={i}
          propFunc={propFunc}
        />
      );
    });
  };

  return <ToggleWrapper>{toggleButtonRender()}</ToggleWrapper>;
};

export default Toggle;
