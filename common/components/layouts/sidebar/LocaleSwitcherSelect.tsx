"use client";

import clsx from "clsx";
import { ChangeEvent, useState, useTransition } from "react";
import { useRouter } from "next/navigation";

import { Locale } from "@/config";

interface LocaleSwitcherSelectProps {
  items: Array<{ value: string; label: string }>;
  label: string;
  defaultValue: string;
}

const LocaleSwitcherSelect = ({
  items,
  label,
  defaultValue,
}: LocaleSwitcherSelectProps) => {
  const [isPending, startTransition] = useTransition();
  const [isShow, setIsShow] = useState(false);
  const router = useRouter();

  const onSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const locale = event.target.value as Locale;
    startTransition(() => {
      // Store locale in localStorage instead of cookies
      if (typeof window !== 'undefined') {
        localStorage.setItem('NEXT_LOCALE', locale);
        // Refresh the page to apply new locale
        window.location.reload();
      }
    });
  };

  return (
    <button
      className={clsx(
        "flex items-center justify-center text-neutral-900 dark:text-neutral-300 ",
        isPending && "transition-opacity [&:disabled]:opacity-30",
      )}
      onClick={() => setIsShow(!isShow)}
    >
      <select
        className="inline-flex appearance-none rounded-xl bg-neutral-100 px-2 py-1 outline-none transition duration-300 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700"
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {items.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </button>
  );
};

export default LocaleSwitcherSelect;
