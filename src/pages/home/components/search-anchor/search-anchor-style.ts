import { Link } from "react-scroll";
import styled from "styled-components";
import { makeFirebaseStoragePath } from "utils";
import { Section } from "components/section";

export const StyledSection = styled(Section)`
  padding: 100px 0;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    ${() =>
      `url(${makeFirebaseStoragePath("searchAnchorImage.jpg?alt=media&token=d56bb8bd-56ce-4438-b6f4-046593898c27")})`};
  background-attachment: fixed;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const StyledLink = styled(Link)`
  margin-top: 80px;
  width: 80%;
  height: 60px;
`;
