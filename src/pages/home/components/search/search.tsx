import { FC } from "react";
import { Typography, Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import { ANCHORS, LOCALIZATION_NAMESPACES, LANGUAGES } from "enums";
import { ENdestinations, RUdestinations } from "mock-database/destinations";
import { SearchDestination } from "interfaces";
import { useSearch } from "./search-hooks";
import { StyledSection } from "./search-style";
import { SearchComponent } from "./components/search-component";

export const Search: FC = () => {
  const {
    date,
    handleChangeDate,
    handleChangeFrom,
    handleChangeWhere,
    hasFieldError,
    getHelperErrorText,
    resetForm,
    formik,
  } = useSearch();
  const { t, i18n } = useTranslation();
  const { handleSubmit, values } = formik;

  const menuItems: SearchDestination[] = i18n.language === LANGUAGES.RU ? RUdestinations : ENdestinations;

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
        <SearchComponent
          date={date}
          handleChangeDate={handleChangeDate}
          handleChangeFrom={handleChangeFrom}
          handleChangeWhere={handleChangeWhere}
          hasFieldError={hasFieldError}
          getHelperErrorText={getHelperErrorText}
          resetForm={resetForm}
          handleSubmit={handleSubmit}
          values={values}
          options={menuItems}
          formik={formik}
        />
      </Container>
    </StyledSection>
  );
};
