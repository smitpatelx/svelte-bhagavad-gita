import config from "$src/config/variables";

export type DataType = {
  chapter_number: number,
  verses_count: number,
  transliteration: string,
  translation: string,
  name: string,
  meaning: {
    en: string,
    hi: string,
  },
  summary: {
    en: string,
    hi: string,
  }
};

/** @type {import('./$types').PageLoad} **/
export async function load({ params }: {
  params: {
    chapter: string,
  }
}): Promise<DataType> {
  const data: DataType = await fetch(
    `${config.apiBasePath}/chapter/${params.chapter}/`
  ).then(res => res.json());
  return data;
}
