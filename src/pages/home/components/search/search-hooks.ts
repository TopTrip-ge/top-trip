import { useTranslation } from "react-i18next";
import { useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import dayjs from "dayjs";
import { LOCALIZATION_NAMESPACES, LOG_EVENTS_BUTTONS } from "enums";
import { useAnalyticsLog } from "firebase-common";
import { SEARCH_FIELD_NAMES } from "./search-constants";
import { SearchDestination } from "./search-interfaces";

const useValidation = () => {
  const { t } = useTranslation(LOCALIZATION_NAMESPACES.VALIDATION);
  const { logEvent } = useAnalyticsLog();
  const validationSchema = yup.object({
    [SEARCH_FIELD_NAMES.FROM]: yup.string().required(t("required")),
    [SEARCH_FIELD_NAMES.WHERE]: yup.string().required(t("required")),
    [SEARCH_FIELD_NAMES.DATE]: yup
      .date()
      .min(dayjs().add(-1, "day"), () => t("current-or-future-date", { min: dayjs().format("DD/MM/YYYY") }))
      .required(t("required"))
      .typeError(t("invalid-date")),
  });
  const formik = useFormik({
    initialValues: {
      [SEARCH_FIELD_NAMES.FROM]: "",
      [SEARCH_FIELD_NAMES.WHERE]: "",
      [SEARCH_FIELD_NAMES.DATE]: "",
    },
    validationSchema,
    onSubmit: (values) => {
      logEvent(LOG_EVENTS_BUTTONS.CLICK_SEARCH_BUTTON, values);
      // eslint-disable-next-line no-alert
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
    formik.setFieldValue(SEARCH_FIELD_NAMES.DATE, value);
  };

  const hasFieldError = (field: SEARCH_FIELD_NAMES): boolean => !!formik.touched[field] && !!formik.errors[field];

  const getHelperErrorText = (field: SEARCH_FIELD_NAMES) => {
    if (hasFieldError(field)) {
      return formik.errors[field];
    }

    return null;
  };

  const resetForm = () => {
    formik.resetForm();
    setDate(null);
  };

  return { date, resetForm, handleChangeDestination, handleChangeDate, hasFieldError, getHelperErrorText, formik };
};
