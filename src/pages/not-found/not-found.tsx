import { FC } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import styled from "styled-components";
import { PATHS } from "enums";
import { StyledLink } from "components";

const Link = styled(StyledLink)`
  padding: 12px;
  color: ${({ theme: { colors } }) => colors.white};

  &:hover {
    color: ${({ theme: { colors } }) => colors.white};
  }
`;

export const NotFound: FC = () => (
  <Box component="main" sx={{ display: "flex", minHeight: "100vh", alignItems: "center", justifyContent: "center" }}>
    <Container>
      <Typography variant="h1">404</Typography>
      <Typography variant="h2">Страница не найдена</Typography>
      <Button variant="contained" sx={{ p: 0, mt: 3 }}>
        <Link to={PATHS.HOME}>Перейти на главную</Link>
      </Button>
    </Container>
  </Box>
);
