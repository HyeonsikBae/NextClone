import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";
import backGroundImage from "../../public/images/back_ground.png";

type BackGroundWrapperProps = {
  width: number;
  height: number;
};

const BackGroundWrapper = styled.div<BackGroundWrapperProps>`
  position: fixed;
  width: ${(props) => (props.width === 0 ? `100%` : `${props.width}px`)};
  height: ${(props) => (props.height === 0 ? `100%` : `${props.height}px`)};
  z-index: -2;
`;

const Background = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    console.log(width, height);
  }, []);

  return (
    <BackGroundWrapper width={width} height={height}>
      <Image priority src={backGroundImage} alt="bg" fill />
    </BackGroundWrapper>
  );
};

export default Background;
