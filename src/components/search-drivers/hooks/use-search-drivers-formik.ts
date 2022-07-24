import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import i18next from "i18next";
import uniqid from "uniqid";
import * as yup from "yup";
import { FieldArrayRenderProps, useFormik } from "formik";
import dayjs from "dayjs";
import { LANGUAGES, LOCALIZATION_NAMESPACES, LOG_EVENTS_BUTTONS, PATHS } from "enums";
import { useAnalyticsLog } from "firebase-common";
import { searchValuesState } from "store/atoms";
import { RUdestinations, ENdestinations } from "mock-database/destinations";
import { isFieldArray, getErrorFromFieldArray } from "utils";
import { SearchDestination, SearchForm } from "interfaces";
import { SEARCH_FIELD_NAMES } from "../search-drivers-constants";

const useValidation = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(LOCALIZATION_NAMESPACES.VALIDATION);
  const setSearchValues = useSetRecoilState(searchValuesState);
  const { logEvent } = useAnalyticsLog();
  const validationSchema = yup.object({
    [SEARCH_FIELD_NAMES.FROM]: yup
      .object()
      .shape({ id: yup.string().required().min(3), label: yup.string().required().min(3) })
      .required(),
    [SEARCH_FIELD_NAMES.WHERE]: yup
      .array()
      .of(
        yup
          .object()
          .shape({ id: yup.string().required().min(3), label: yup.string().required().min(3), key: yup.string() })
      )
      .required(),
    [SEARCH_FIELD_NAMES.DATE]: yup
      .date()
      .min(dayjs().add(-1, "day"), () => t("current-or-future-date", { min: dayjs().format("DD/MM/YYYY") }))
      .required(t("required"))
      .typeError(t("invalid-date")),
  });

  const formik = useFormik<SearchForm>({
    initialValues: {
      [SEARCH_FIELD_NAMES.FROM]: { id: "", label: "" },
      [SEARCH_FIELD_NAMES.WHERE]: [{ id: "", label: "", key: uniqid() }],
      [SEARCH_FIELD_NAMES.DATE]: "",
    },
    validationSchema,
    onSubmit: (values) => {
      logEvent(LOG_EVENTS_BUTTONS.CLICK_SEARCH_BUTTON, values);
      navigate(PATHS.SELECT_DRIVER);
      setSearchValues(values);
    },
  });

  return formik;
};

export const useSearchDriversFormik = () => {
  const { t } = useTranslation(LOCALIZATION_NAMESPACES.VALIDATION);
  const options: SearchDestination[] = i18next.language === LANGUAGES.RU ? RUdestinations : ENdestinations;
  const formik = useValidation();
  const [date, setDate] = useState<Date | null>(null);

  const handleChangeFrom = (value: SearchDestination | null) => {
    formik.setFieldValue(SEARCH_FIELD_NAMES.FROM, value);
  };

  const handleChangeWhere = (arrayHelpers: FieldArrayRenderProps, index: number, value: SearchDestination | null) => {
    arrayHelpers.replace(index, { key: arrayHelpers.form.values.where[index].key, id: value?.id, label: value?.label });
  };

  const handleChangeDate = (value: Date | null) => {
    setDate(value);
    formik.setFieldValue(SEARCH_FIELD_NAMES.DATE, value);
  };

  const hasFieldError = (field: SEARCH_FIELD_NAMES): boolean => {
    const fieldErrors = formik.errors ?? [];
    const hasSubmission = !!formik.submitCount;

    if (isFieldArray(field)) {
      const error = getErrorFromFieldArray(field, fieldErrors);
      return !!error && hasSubmission;
    }

    return !!fieldErrors[field] && hasSubmission;
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
    options,
  };
};

export type UseSearchDriversFormik = ReturnType<typeof useSearchDriversFormik>;
