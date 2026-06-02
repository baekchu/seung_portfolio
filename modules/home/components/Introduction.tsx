"use client";

import { useTranslations } from "next-intl";
import { HiLocationMarker } from "react-icons/hi";

const Introduction = () => {
  const t = useTranslations("HomePage");

  return (
    <section className="space-y-5">
      {/* Location badge */}
      <div className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-3 py-1">
        <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
        <span className="text-xs text-neutral-500 dark:text-neutral-400 flex items-center gap-1">
          <HiLocationMarker size={11} />
          {t("location")}
        </span>
      </div>

      {/* Greeting */}
      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 leading-tight">
        {t("intro")}
      </h1>

      {/* Description */}
      <p className="text-sm leading-7 text-neutral-600 dark:text-neutral-400">
        {t("resume")}
      </p>
    </section>
  );
};

export default Introduction;

