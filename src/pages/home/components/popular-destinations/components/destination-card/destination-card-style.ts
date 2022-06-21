import styled from "styled-components";
import { Box } from "@mui/material";

export const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: end;
  border-radius: 16px;
  background: linear-gradient(rgba(0, 0, 0, 0.4) rgba(0, 0, 0, 0.4));
  width: 400px;
  height: 400px;
  background-size: cover;
  background-position: center;
  background-repeat: none;
  color: #fff;
`;
