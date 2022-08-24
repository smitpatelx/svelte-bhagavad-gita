export type KeyValuePair = { [key: string]: string };

export type DataObject = {
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
    }
} & KeyValuePair[];