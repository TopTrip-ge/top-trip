import { FC } from "react";
import { Typography, Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import { ANCHORS, LOCALIZATION_NAMESPACES } from "enums";
import { SearchDrivers } from "components/search-drivers";
import { StyledSection } from "./search-style";

export const Search: FC = () => {
  const { t } = useTranslation();

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
        <SearchDrivers />
      </Container>
    </StyledSection>
  );
};
