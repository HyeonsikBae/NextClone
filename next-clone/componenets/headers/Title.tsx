import Link from "next/link";
import styled from "styled-components";

const TitleWrapper = styled.div`
  width: 50%;
`;

type TitleProps = {
  title: string;
};

const Title = (props: TitleProps) => {
  const { title } = props;
  return (
    <TitleWrapper>
      <Link href={"/"}>{title}</Link>
    </TitleWrapper>
  );
};

export default Title;
