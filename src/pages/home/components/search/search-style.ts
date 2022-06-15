import styled from "styled-components";
import { Section } from "components/section";
import { makeFirebaseStoragePath } from "utils/make-firebase-storage-path";

export const StyledSection = styled(Section)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 40px 0;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    ${() =>
      `url(${makeFirebaseStoragePath(
        "v0/b/top-trip-1e5d1.appspot.com/o/mainBackground.png?alt=media&token=0f7eb833-d1bf-4825-bea1-134661c17ddd"
      )})`};
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; ;
`;
