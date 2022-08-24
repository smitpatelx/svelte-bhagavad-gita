import type { DataObject } from "$interfaces/chapters";

export type DataType = {
  chapters: DataObject[],
}

/** @type {import('./$types').PageLoad} */
export async function load(): Promise<DataType> {
  const data: DataObject[] = await fetch(`https://bhagavadgitaapi.in/chapters/`).then(res => res.json());
  return {
    chapters: data,
  };
}
