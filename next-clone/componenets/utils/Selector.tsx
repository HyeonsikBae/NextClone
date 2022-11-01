import { useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setFeeling } from "../../store/modules/feeling";

type SelectorWrapperProps = {
  width: number;
  height: number;
};

type SelectorProps = {
  name: string;
  width: number;
  height: number;
  select_menus: string[];
};

const SelectorWrapper = styled.div<SelectorWrapperProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const Selector = (props: SelectorProps) => {
  const { name, width, height, select_menus } = props;
  const [value, setValue] = useState(select_menus[0]);
  const dispatch = useAppDispatch();

  const feeling = useAppSelector((state) => state.feeling.selectedItem);

  const selectChange = (e) => {
    const temp_value = e.target.value;
    setValue(temp_value);
    dispatch(setFeeling(temp_value));
  };

  const renderSelectMenus = (): JSX.Element[] => {
    return select_menus.map((item, i) => {
      return (
        <option value={item} key={i}>
          {item}
        </option>
      );
    });
  };

  return (
    <fieldset>
      <legend>{name}</legend>
      <SelectorWrapper width={width} height={height}>
        <select value={value} name={name} onChange={(e) => selectChange(e)}>
          {renderSelectMenus()}
        </select>
      </SelectorWrapper>
    </fieldset>
  );
};

export default Selector;
