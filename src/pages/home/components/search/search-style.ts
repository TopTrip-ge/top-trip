import styled from "styled-components";
import { Section } from "components/section";
import { makeFirebaseStoragePath } from "utils";

export const StyledSection = styled(Section)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 40px 0;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    ${() =>
      `url(${makeFirebaseStoragePath(
        "v0/b/top-trip-1e5d1.appspot.com/o/mainBackground.jpg?alt=media&token=2eaf6088-fd73-452e-a651-d2325f67a055"
      )})`};
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; ;
`;
