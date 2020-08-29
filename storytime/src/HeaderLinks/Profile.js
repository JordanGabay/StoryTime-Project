import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import moment from "moment";
import RichTextEditor from "../components/RichTextEditor";
import { CurrentUserContext } from "../CurrentUserContext";

const Profile = (props) => {
  const { user, isAuthenticated } = useAuth0();
  const [isActive, setIsActive] = useState(false);
  const date = moment();
  const monthYear = date.format("MMMM YYYY");
 

  return (
    <MainWrapper>
      <Wrapper>
        <Avatar></Avatar>
        <Banner></Banner>
        <Button>Connect with</Button>
        <SepDiv>
          <DisplayName>Jordan Gabay</DisplayName>
        </SepDiv>
        <SepDiv>
          <Handle>JordanGabay</Handle>
        </SepDiv>
        <StyledSpan>Joined {monthYear}</StyledSpan>
      </Wrapper>
      <RichWrapper>
        <RichTextEditor />
      </RichWrapper>
      <StoryWrapper>
        <Story1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eros urna,
          pretium nec neque non, pharetra vehicula tellus. In a mi orci.
          Curabitur in lorem a nibh fringilla ultrices vel quis ipsum. Maecenas
          nec maximus lacus. Nam vitae arcu id eros porttitor ultrices. Integer
          feugiat nulla in elit semper, eu fermentum augue finibus. Vestibulum
          interdum laoreet vehicula. Nulla orci turpis, hendrerit eget urna
          vitae, facilisis tincidunt diam. Nulla iaculis felis massa. Nullam sed
          elit eu dui pellentesque scelerisque. Nullam rutrum ipsum id purus
          tristique, non vestibulum nulla imperdiet. Pellentesque luctus, elit
          sit amet commodo gravida, quam ante pretium purus, sit amet consequat
          sem nulla id dolor. Phasellus sed mi ac nisi convallis dignissim eu
          quis est. Suspendisse mattis orci nisi, eget rhoncus dui laoreet eu.
          Mauris vulputate tellus est, nec finibus dolor sollicitudin eget.
          Aliquam erat volutpat. Curabitur efficitur risus nisl, a mollis purus
          porta nec. Nam arcu magna, eleifend a justo quis, bibendum eleifend
          quam. Donec nulla leo, aliquam ac volutpat ut, eleifend sit amet eros.
          Nullam at nibh eu nisl rutrum viverra. Nullam non turpis eget dolor
          tincidunt mattis sit amet aliquet tortor. Pellentesque eu condimentum
          mi. Praesent ligula lacus, aliquam condimentum ligula sit amet,
          hendrerit pharetra nisi. Nullam faucibus nulla a facilisis eleifend.
          Fusce vitae fermentum orci, nec dictum neque. Mauris fermentum enim
          congue risus tristique, a convallis nunc varius. Vestibulum sapien
          risus, rhoncus non urna malesuada, cursus semper ipsum. Fusce quis
          nulla vestibulum, sagittis arcu eu, pulvinar lacus. Duis consectetur
          facilisis nunc, ut luctus elit fermentum eget.
        </Story1>
      </StoryWrapper>
      <StoryWrapper>
        <Story2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eros urna,
          pretium nec neque non, pharetra vehicula tellus. In a mi orci.
          Curabitur in lorem a nibh fringilla ultrices vel quis ipsum. Maecenas
          nec maximus lacus. Nam vitae arcu id eros porttitor ultrices. Integer
          feugiat nulla in elit semper, eu fermentum augue finibus. Vestibulum
          interdum laoreet vehicula. Nulla orci turpis, hendrerit eget urna
          vitae, facilisis tincidunt diam. Nulla iaculis felis massa. Nullam sed
          elit eu dui pellentesque scelerisque. Nullam rutrum ipsum id purus
          tristique, non vestibulum nulla imperdiet. Pellentesque luctus, elit
          sit amet commodo gravida, quam ante pretium purus, sit amet consequat
          sem nulla id dolor. Phasellus sed mi ac nisi convallis dignissim eu
          quis est. Suspendisse mattis orci nisi, eget rhoncus dui laoreet eu.
          Mauris vulputate tellus est, nec finibus dolor sollicitudin eget.
          Aliquam erat volutpat. Curabitur efficitur risus nisl, a mollis purus
          porta nec. Nam arcu magna, eleifend a justo quis, bibendum eleifend
          quam. Donec nulla leo, aliquam ac volutpat ut, eleifend sit amet eros.
          Nullam at nibh eu nisl rutrum viverra. Nullam non turpis eget dolor
          tincidunt mattis sit amet aliquet tortor. Pellentesque eu condimentum
          mi. Praesent ligula lacus, aliquam condimentum ligula sit amet,
          hendrerit pharetra nisi. Nullam faucibus nulla a facilisis eleifend.
          Fusce vitae fermentum orci, nec dictum neque. Mauris fermentum enim
          congue risus tristique, a convallis nunc varius. Vestibulum sapien
          risus, rhoncus non urna malesuada, cursus semper ipsum. Fusce quis
          nulla vestibulum, sagittis arcu eu, pulvinar lacus. Duis consectetur
          facilisis nunc, ut luctus elit fermentum eget. Pellentesque nulla
          ligula, convallis sed aliquet eu, ultrices ultricies lectus. Quisque
          porta sed felis quis porta. Mauris tempus libero dignissim nulla
          porta, nec consectetur felis efficitur. Aenean rutrum bibendum massa,
          at pellentesque lacus efficitur at. Praesent placerat leo in semper
          lobortis. Vestibulum diam orci, malesuada vel finibus a, luctus vitae
          lorem. Nullam at diam porta ipsum faucibus maximus. Suspendisse
          dapibus ut mauris ut porta. Integer elit libero, hendrerit sit amet
          efficitur sit amet, tincidunt nec enim. Vivamus fermentum tristique
          dolor, vel dignissim purus mattis quis. Etiam fermentum purus in neque
          rutrum pellentesque. Duis in ultrices quam, eu tincidunt tortor.
          Nullam id fermentum eros, porta facilisis lacus. Ut porttitor
          fringilla arcu a iaculis. Sed vulputate sem eget nisi rutrum, ac
          elementum mi rutrum. Phasellus vel arcu viverra, ornare purus eu,
          lobortis dolor. Curabitur faucibus libero vitae semper posuere.
          Aliquam viverra eget lectus eu aliquet. Etiam eu tortor ullamcorper,
          consectetur metus ut, congue sapien. In aliquam diam et nisi sodales
          tincidunt.
        </Story2>
      </StoryWrapper>
    </MainWrapper>
  );
};

const Wrapper = styled.div``;

const MainWrapper = styled.div`
`;

const Avatar = styled.img``;

const Banner = styled.img``;

const Button = styled.button``;

const DisplayName = styled.span``;

const Handle = styled.span``;

const StyledSpan = styled.span``;

const SepDiv = styled.div``;

const StoryWrapper = styled.div`
border-bottom: 2px solid grey;
`;

const Story1 = styled.p`
  margin-top: 100px;
`;

const RichWrapper = styled.div``;

const Story2 = styled.p`
margin-top: 100px;
`

export default Profile;
