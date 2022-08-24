import type { DataObject } from "$interfaces/chapters";
import config from "$src/config/variables";

export type DataType = {
  chapters: DataObject[],
};

/** @type {import('./$types').PageLoad} */
export async function load(): Promise<DataType> {
  const data: DataObject[] = await fetch(
    `${config.apiBasePath}/chapters/`
  ).then(res => res.json());
  return {
    chapters: data,
  };
};
