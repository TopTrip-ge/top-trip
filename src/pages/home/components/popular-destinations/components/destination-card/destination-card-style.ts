import styled from "styled-components";
import { Box, Typography } from "@mui/material";

export const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: end;
  border-radius: 16px;
  max-width: 400px;
  max-height: 500px;
  width: 24vw;
  height: 32vw;
  background-size: cover;
  background-position: center;
  background-repeat: none;
  color: ${({ theme: { colors } }) => colors.white}; ;
`;

export const StyledTypography = styled(Typography)`
  position: absolute;
  color: ${({ theme: { colors } }) => colors.white};
  background-color: ${({ theme: { colors } }) => colors.black};
  padding: 4px;
  border-radius: 10px;
  top: 20px;
  left: -20px;
`;
