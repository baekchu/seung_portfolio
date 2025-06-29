"use client";

import { useLocale, useTranslations } from "next-intl";

import LocaleSwitcherSelect from "./LocaleSwitcherSelect";

const LocaleSwitcher = () => {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect
      defaultValue={locale}
      items={[
        {
          value: "kr",
          label: t("kr"),
        },
        {
          value: "en",
          label: t("en"),
        },
      ]}
      label={t("label")}
    />
  );
};

export default LocaleSwitcher;
