import styled from "styled-components";

type ProfileInfoProps = {
  userInfo: {
    name: string;
    phone: string;
    mail: string;
    instagram: string;
  };
};

const ProfileInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
`;

const P = styled.p`
  margin: 0.5rem 0rem;
`;

const ProfileInfo = (props: ProfileInfoProps) => {
  const { userInfo } = props;

  const renderInfo = () => {
    return Object.keys(userInfo).map((key, i) => {
      return <P key={i}>{userInfo[key]}</P>;
    });
  };

  return <ProfileInfoWrapper>{renderInfo()}</ProfileInfoWrapper>;
};

export default ProfileInfo;
