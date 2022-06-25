import { Box, Button, Container, Typography } from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { ANCHORS, LOCALIZATION_NAMESPACES } from "enums";
import { StyledLink, StyledSection } from "./search-anchor-style";

export const SearchAnchor: FC = () => {
  const { t } = useTranslation();

  return (
    <StyledSection>
      <Container>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between" }}>
          <Typography
            variant="h3"
            component="h3"
            sx={{ textAlign: "center", color: "custom.white", fontSize: { xs: "30px", md: "50px" } }}
          >
            {t("title.travel-around-georgia", { ns: LOCALIZATION_NAMESPACES.HOME_SECTIONS })}
            <br /> {t("title.with-toptrip", { ns: LOCALIZATION_NAMESPACES.HOME_SECTIONS })}
          </Typography>
          <StyledLink to={ANCHORS.SEARCH} smooth offset={-60} duration={1000}>
            <Button size="large" sx={{ width: "100%", height: "100%" }}>
              {t("button.plan-tour")}
            </Button>
          </StyledLink>
        </Box>
      </Container>
    </StyledSection>
  );
};
