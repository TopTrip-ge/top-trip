import { useTranslation } from "react-i18next";
import { useMemo, useState } from "react";
import * as yup from "yup";
import uniqid from "uniqid";
import { LOCALIZATION_NAMESPACES } from "enums";
import { useFormik } from "formik";
import dayjs from "dayjs";
import { SEARCH_FIELD_NAMES } from "./search-constants";
import { SearchDestination } from "./search-interfaces";

export const useDestinations = () => {
  const { t, i18n } = useTranslation([LOCALIZATION_NAMESPACES.DESTINATIONS]);
  const destinations = useMemo(() => t("destinations") as string[], [i18n.language]);

  return Object.values(destinations).map((name) => ({
    id: uniqid(),
    name,
  }));
};

const useValidation = () => {
  const { t } = useTranslation(LOCALIZATION_NAMESPACES.VALIDATION);
  const validationSchema = yup.object({
    from: yup.string().required(t("required")),
    where: yup.string().required(t("required")),
    date: yup.string().required(t("required")),
  });

  const formik = useFormik({
    initialValues: {
      [SEARCH_FIELD_NAMES.FROM]: "",
      [SEARCH_FIELD_NAMES.WHERE]: "",
      [SEARCH_FIELD_NAMES.DATE]: "",
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  return formik;
};

export const useSearch = () => {
  const formik = useValidation();
  const [date, setDate] = useState<Date | null>(null);

  const setDatePickerValue = (newValue: Date | null) => setDate(newValue);

  const handleChangeDestination = (field: SEARCH_FIELD_NAMES, value: SearchDestination | null) => {
    formik.setFieldValue(field, value?.label ?? "");
  };

  const handleChangeDate = (value: Date | null) => {
    setDatePickerValue(value);
    formik.setFieldValue(SEARCH_FIELD_NAMES.DATE, dayjs(value).format("DD/MM/YYYY"));
  };

  return { date, handleChangeDestination, handleChangeDate, formik };
};
