import type { DataObject, KeyValuePair } from "$interfaces/chapters";
import config from "$src/config/variables";

export type DataType = {
  _id: string,
  chapter: number,
  verse: number,
  slok: string,
  transliteration: string,
  chapter_number: string,
  name: string,
  meaning: {
    en: string,
    hi: string,
  },
  translations: KeyValuePair[],
};

const extractAllExplaination = (dataObject: DataObject) => {
  return Object.entries(dataObject).reduce((prev, [_, value]) => {
    if(typeof value === 'object') {
      const { author, ...rest } = value;
      return [...prev, { author, lines: Object.values(rest)}] as KeyValuePair[];
    }
    return prev;
  }, [] as KeyValuePair[]);
}

/** @type {import('./$types').PageLoad} */
export async function load({ params }: {
  params: {
    chapter: string,
    verse: string,
  }
}): Promise<DataType> {
  const data: DataObject = await fetch(
    `${config.apiBasePath}/slok/${params.chapter}/${params.verse}/`
  ).then(res => res.json());
  return {
    ...data,
    translations: extractAllExplaination(data),
  };
}
