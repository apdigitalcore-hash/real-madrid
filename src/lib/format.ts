import { dataReadOn } from "@/lib/madrid-data";

const DATE_FORMAT = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export function formatBorn(iso: string) {
  return DATE_FORMAT.format(new Date(`${iso}T00:00:00Z`));
}

/**
 * Age in whole years at the date the squad data was read, not at render time —
 * the rest of the page is a snapshot of that date, so the ages must match it.
 */
export const DATA_READ_DATE = new Date("2026-11-04T00:00:00Z");

export function ageFrom(iso: string, on = DATA_READ_DATE) {
  const born = new Date(`${iso}T00:00:00Z`);
  let age = on.getUTCFullYear() - born.getUTCFullYear();
  const beforeBirthday =
    on.getUTCMonth() < born.getUTCMonth() ||
    (on.getUTCMonth() === born.getUTCMonth() && on.getUTCDate() < born.getUTCDate());
  if (beforeBirthday) age -= 1;
  return age;
}

export { dataReadOn };
