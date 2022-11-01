import styled from "styled-components";
import Selector from "../../utils/Selector";
import ProfileInfo from "./ProfileInfo";
import ProfilePicture from "./ProfilePicture";

const ProfileWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100%;
  border: 1px solid black;
  border-radius: 0.5rem;
  margin-right: 0.5rem;
  @media screen and (max-width: 960px) {
    flex-direction: row;
    width: 100%;
    height: 30%;
    align-items: center;
  }
`;

const Profile = () => {
  const userInfo = {
    name: "Hyeonsik",
    phone: "010-0000-0000",
    mail: "baehyeonsik@gmail.com",
    instagram: "none",
  };
  return (
    <ProfileWrapper>
      <ProfilePicture></ProfilePicture>
      <ProfileInfo userInfo={userInfo}></ProfileInfo>
      <Selector
        name="feeling"
        width={200}
        height={100}
        select_menus={["1", "2", "3"]}
      ></Selector>
    </ProfileWrapper>
  );
};

export default Profile;
