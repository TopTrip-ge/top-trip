import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Box, Button, Container, Typography } from "@mui/material";
import styled from "styled-components";
import { LOCALIZATION_NAMESPACES, PATHS } from "enums";
import { StyledLink } from "components/styled-link";
import { useNotFound } from "./not-found-hooks";

const Link = styled(StyledLink)`
  padding: 12px;
  color: ${({ theme: { colors } }) => colors.white};

  &:hover {
    color: ${({ theme: { colors } }) => colors.white};
  }
`;

export const NotFound: FC = () => {
  const { t } = useTranslation();
  const { handleGoHomeClick } = useNotFound();

  return (
    <Box component="main" sx={{ display: "flex", minHeight: "100vh", alignItems: "center", justifyContent: "center" }}>
      <Container>
        <Typography
          variant="h1"
          sx={{ fontSize: { xs: "50px", sm: "60px", md: "100px" }, textAlign: { xs: "center", sm: "left" } }}
        >
          404
        </Typography>
        <Typography
          variant="h2"
          sx={{ textAlign: { xs: "center", sm: "left" }, fontSize: { xs: "40px", sm: "50px", md: "84px" } }}
        >
          {t("text", { ns: LOCALIZATION_NAMESPACES.NOT_FOUND_PAGE })}
        </Typography>
        <Button variant="contained" sx={{ p: 0, mt: 3, width: "100%" }} onClick={handleGoHomeClick}>
          <Link to={PATHS.HOME}>{t("button.go-to-home")}</Link>
        </Button>
      </Container>
    </Box>
  );
};
