import { useTranslation } from "react-i18next";
import { useState } from "react";
import i18next from "i18next";
import * as yup from "yup";
import { FieldArrayRenderProps, useFormik } from "formik";
import dayjs from "dayjs";
import { LANGUAGES, LOCALIZATION_NAMESPACES, LOG_EVENTS_BUTTONS } from "enums";
import { useAnalyticsLog } from "firebase-common";
import { RUdestinations, ENdestinations } from "mock-database/destinations";
import { isFieldArray, getErrorFromFieldArray } from "utils";
import { SEARCH_FIELD_NAMES } from "./search-constants";
import { SearchDestination } from "./search-interfaces";

const useValidation = () => {
  const { t } = useTranslation(LOCALIZATION_NAMESPACES.VALIDATION);
  const { logEvent } = useAnalyticsLog();
  const validationSchema = yup.object({
    [SEARCH_FIELD_NAMES.FROM]: yup
      .object()
      .shape({ id: yup.string().required().min(3), label: yup.string().required().min(3) })
      .required(),
    [SEARCH_FIELD_NAMES.WHERE]: yup
      .array()
      .of(yup.object().shape({ id: yup.string().required().min(3), label: yup.string().required().min(3) }))
      .required(),
    [SEARCH_FIELD_NAMES.DATE]: yup
      .date()
      .min(dayjs().add(-1, "day"), () => t("current-or-future-date", { min: dayjs().format("DD/MM/YYYY") }))
      .required(t("required"))
      .typeError(t("invalid-date")),
  });
  const formik = useFormik({
    initialValues: {
      [SEARCH_FIELD_NAMES.FROM]: { id: "", label: "" },
      [SEARCH_FIELD_NAMES.WHERE]: [{ id: "", label: "" }],
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
  const { t } = useTranslation(LOCALIZATION_NAMESPACES.VALIDATION);
  const menuItems: SearchDestination[] = i18next.language === LANGUAGES.RU ? RUdestinations : ENdestinations;
  const formik = useValidation();
  const [date, setDate] = useState<Date | null>(null);

  const setDatePickerValue = (newValue: Date | null) => setDate(newValue);

  const handleChangeFrom = (value: SearchDestination | null) => {
    const valueId = value?.id;
    const valueLabel = value?.label;
    formik.setFieldValue(SEARCH_FIELD_NAMES.FROM, { id: valueId, label: valueLabel });
  };

  const handleChangeWhere = (arrayHelpers: FieldArrayRenderProps, index: number, value: any | null) => {
    arrayHelpers.replace(index, { id: value.id, label: value.label });
  };

  const handleChangeDate = (value: Date | null) => {
    setDatePickerValue(value);
    formik.setFieldValue(SEARCH_FIELD_NAMES.DATE, value);
  };

  const hasFieldError = (field: SEARCH_FIELD_NAMES): boolean => {
    const fieldTouched = formik.touched[field];
    const fieldErrors = formik.errors ?? [];

    if (isFieldArray(field)) {
      const error = getErrorFromFieldArray(field, fieldErrors);
      return !!error;
    }

    return !!fieldTouched && !!fieldErrors[field];
  };

  const getHelperErrorText = (field: SEARCH_FIELD_NAMES) => {
    if (hasFieldError(field)) {
      if (field.includes(SEARCH_FIELD_NAMES.WHERE)) {
        return t(SEARCH_FIELD_NAMES.WHERE);
      }

      if (field === SEARCH_FIELD_NAMES.FROM) {
        return t(SEARCH_FIELD_NAMES.FROM);
      }

      if (field === SEARCH_FIELD_NAMES.DATE) {
        return t(SEARCH_FIELD_NAMES.DATE);
      }
    }

    return null;
  };

  const resetForm = () => {
    formik.resetForm();
    setDate(null);
  };

  return {
    date,
    resetForm,
    handleChangeFrom,
    handleChangeWhere,
    handleChangeDate,
    hasFieldError,
    getHelperErrorText,
    formik,
    menuItems,
  };
};

export type UseSearch = ReturnType<typeof useSearch>;
