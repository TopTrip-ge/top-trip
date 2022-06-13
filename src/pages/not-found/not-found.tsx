import { FC } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Container } from "components/container";
import { PATHS } from "enums/paths";
import { StyledLink } from "components/styled-link";
import styled from "styled-components";

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
