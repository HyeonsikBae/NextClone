import Image from "next/image";
import styled from "styled-components";
import profilePicture from "../../../public/images/default_profile.png";
import Center from "../../utils/Center";

type ProfilePictureProps = {
  img?: string;
};

const ProfilePictureWrapper = styled.div`
  width: 100%;
  height: 40%;
  margin-top: 10%;
  @media screen and (max-width: 960px) {
    margin: 0;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  width: 80%;
  padding-bottom: 80%;
`;

const ProfilePicture = (props: ProfilePictureProps) => {
  const { img } = props;

  return (
    <ProfilePictureWrapper>
      <Center>
        <ImageWrapper>
          <Image src={img || profilePicture} alt="profile_picture" fill></Image>
        </ImageWrapper>
      </Center>
    </ProfilePictureWrapper>
  );
};

export default ProfilePicture;
