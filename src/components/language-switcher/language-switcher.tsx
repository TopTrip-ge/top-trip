import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { LANGUAGES, LOG_EVENTS_SELECTORS } from "enums";
import { makeFirebaseStoragePath } from "utils/make-firebase-storage-path";
import { useAnalyticsLog } from "firebase-common";
import { LANG_SWITCHER_ID, LANG_SWITCHER_LABEL_ID } from "./language-switcher-constants";
import { StyledImg } from "./language-switcher-styles";

const LANGUAGES_ITEM = [
  {
    label: (
      <>
        <StyledImg
          src={makeFirebaseStoragePath("flags%2Fen-flag.svg?alt=media&token=8b26e54d-8ff7-44b2-bd08-2d1f60d5cc2c")}
          alt="EN flag"
        />
        EN
      </>
    ),
    value: LANGUAGES.EN,
  },
  {
    label: (
      <>
        <StyledImg
          src={makeFirebaseStoragePath("flags%2Fru-flag.svg?alt=media&token=fe1ec886-2b14-4418-bf21-260e61607b80")}
          alt="RU flag"
        />
        RU
      </>
    ),
    value: LANGUAGES.RU,
  },
];

export const LanguageSwitcher: FC = () => {
  const { t, i18n } = useTranslation();
  const { logEvent } = useAnalyticsLog();

  const handleChange = ({ target: { value } }: SelectChangeEvent<LANGUAGES>) => {
    i18n.changeLanguage(value);
  };

  useEffect(() => {
    logEvent(LOG_EVENTS_SELECTORS.SELECT_LANGUAGE, { lang: i18n.language });
  }, [i18n.language, logEvent]);

  return (
    <FormControl>
      <InputLabel id={LANG_SWITCHER_LABEL_ID}>{t("label.lang")}</InputLabel>
      <Select
        MenuProps={{
          disableScrollLock: true,
        }}
        id={LANG_SWITCHER_ID}
        labelId={LANG_SWITCHER_LABEL_ID}
        label={t("label.lang")}
        onChange={handleChange}
        value={i18n.language as LANGUAGES}
        sx={{
          [`#${LANG_SWITCHER_ID}`]: {
            py: 1,
          },
        }}
      >
        {LANGUAGES_ITEM.map(({ label, value }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
