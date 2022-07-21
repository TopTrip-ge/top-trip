import { FC } from "react";
import { Typography, Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import { ANCHORS, LOCALIZATION_NAMESPACES } from "enums";
import { StyledSection } from "./search-style";
import { SearchComponent } from "./components/search-component";

export const Search: FC = () => {
  const { t, i18n } = useTranslation();
  return (
    <StyledSection>
      <Container sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          id={ANCHORS.SEARCH}
          sx={{
            fontWeight: "fontWeightRegular",
            textAlign: "center",
            color: "custom.white",
            fontSize: { xs: "30px", md: "50px" },
            mb: { xs: 5, sm: 15 },
          }}
          variant="h2"
          component="h2"
        >
          {t("title.transfers", { ns: LOCALIZATION_NAMESPACES.HOME_SECTIONS })}
          <br />
          {t("title.whole-georgia", { ns: LOCALIZATION_NAMESPACES.HOME_SECTIONS })}
        </Typography>
        <SearchComponent lang={i18n.language} />
      </Container>
    </StyledSection>
  );
};
