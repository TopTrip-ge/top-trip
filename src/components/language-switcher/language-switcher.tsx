import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "enums";
import { LANG_SWITCHER_ID, LANG_SWITCHER_LABEL_ID } from "./language-switcher-constants";

export const LanguageSwitcher: FC = () => {
  const { t, i18n } = useTranslation();

  const handleChange = ({ target: { value } }: SelectChangeEvent<LANGUAGES>) => {
    i18n.changeLanguage(value);
  };

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
        {Object.entries(LANGUAGES).map(([key, value]) => (
          <MenuItem value={value}>{key}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
