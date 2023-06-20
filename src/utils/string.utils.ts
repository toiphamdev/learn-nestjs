import * as diacritic from 'diacritic';

export function removeDiacritics(input: string): string {
  return diacritic.clean(input);
}
