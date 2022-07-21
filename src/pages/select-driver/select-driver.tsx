import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Container, Typography } from "@mui/material";
import { useRecoilValue } from "recoil";
import { MainLayout } from "layouts/main";
import { Section } from "components/section";
import { searchValuesStateSelector } from "store/selectors";
import { calcDistance } from "utils";
import { LANGUAGES } from "enums";
import { SearchComponent } from "pages/home/components/search/components/search-component";
import { useSearch } from "pages/home/components/search/search-hooks";
import { SearchDestination } from "interfaces/search";
import { RUdestinations, ENdestinations } from "mock-database/destinations";
import { Drivers } from "./components/drivers/drivers";

export const SelectDriver: FC = () => {
  const stateValues = useRecoilValue(searchValuesStateSelector);
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
  const { handleSubmit, values } = formik;
  const { i18n } = useTranslation();
  const menuItems: SearchDestination[] = i18n.language === LANGUAGES.RU ? RUdestinations : ENdestinations;
  return (
    <MainLayout>
      <Section>
        <Container>
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
          <Typography sx={{ py: 6, fontSize: "24px", fontWeight: "fontWeightBold" }}>
            {calcDistance(i18n.language as LANGUAGES, stateValues?.from, stateValues?.where)}
          </Typography>
          <Drivers />
        </Container>
      </Section>
    </MainLayout>
  );
};
