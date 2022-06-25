import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Box, Button, Container, Typography } from "@mui/material";
import styled from "styled-components";
import { LOCALIZATION_NAMESPACES, PATHS } from "enums";
import { StyledLink } from "components/styled-link";

const Link = styled(StyledLink)`
  padding: 12px;
  color: ${({ theme: { colors } }) => colors.white};

  &:hover {
    color: ${({ theme: { colors } }) => colors.white};
  }
`;

export const NotFound: FC = () => {
  const { t } = useTranslation();

  return (
    <Box component="main" sx={{ display: "flex", minHeight: "100vh", alignItems: "center", justifyContent: "center" }}>
      <Container>
        <Typography variant="h1">404</Typography>
        <Typography variant="h2">{t("text", { ns: LOCALIZATION_NAMESPACES.NOT_FOUND_PAGE })}</Typography>
        <Button variant="contained" sx={{ p: 0, mt: 3 }}>
          <Link to={PATHS.HOME}>{t("button.go-to-home")}</Link>
        </Button>
      </Container>
    </Box>
  );
};
