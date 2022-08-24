import type { DataObject } from "$interfaces/chapters";

export type DataType = DataObject[];

/** @type {import('./$types').PageLoad} */
export async function load({ params }: {
  params: {
    chapter: string,
  }
}): Promise<DataType> {
  const data: DataObject[] = await fetch(`https://bhagavadgitaapi.in/chapter/${params.chapter}/`).then(res => res.json());
  return data;
}
