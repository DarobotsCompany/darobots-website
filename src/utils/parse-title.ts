export function parseTitleToURL(title: string): string {
  const map: Record<string, string> = {
    а: 'a',
    б: 'b',
    в: 'v',
    г: 'h',
    ґ: 'g',
    д: 'd',
    е: 'e',
    є: 'ye',
    ж: 'zh',
    з: 'z',
    и: 'y',
    і: 'i',
    ї: 'yi',
    й: 'y',
    к: 'k',
    л: 'l',
    м: 'm',
    н: 'n',
    о: 'o',
    п: 'p',
    р: 'r',
    с: 's',
    т: 't',
    у: 'u',
    ф: 'f',
    х: 'kh',
    ц: 'ts',
    ч: 'ch',
    ш: 'sh',
    щ: 'shch',
    ю: 'yu',
    я: 'ya',

    // Uppercase
    А: 'a',
    Б: 'b',
    В: 'v',
    Г: 'h',
    Ґ: 'g',
    Д: 'd',
    Е: 'e',
    Є: 'ye',
    Ж: 'zh',
    З: 'z',
    И: 'y',
    І: 'i',
    Ї: 'yi',
    Й: 'y',
    К: 'k',
    Л: 'l',
    М: 'm',
    Н: 'n',
    О: 'o',
    П: 'p',
    Р: 'r',
    С: 's',
    Т: 't',
    У: 'u',
    Ф: 'f',
    Х: 'kh',
    Ц: 'ts',
    Ч: 'ch',
    Ш: 'sh',
    Щ: 'shch',
    Ю: 'yu',
    Я: 'ya',
  };

  return title
    .replace(/[^\p{L}\p{N}\s-]/gu, '')
    .split('')
    .map((char) => map[char] ?? char)
    .join('')
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}
