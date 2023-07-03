import { Allcode } from 'src/allcode/entities/allcode.entity';

export function getLeafCategoryCodes(
  parentCode: string,
  categories: Allcode[],
) {
  const childrenCategories = categories.filter(
    (category) => category.parentCode === parentCode,
  );
  let leafCategoryCodes = [];
  if (childrenCategories.length < 1) {
    leafCategoryCodes.push(parentCode);
    return leafCategoryCodes;
  }

  for (const category of childrenCategories) {
    const childCategoryCodes = getLeafCategoryCodes(category.code, categories);

    if (childCategoryCodes.length === 0) {
      leafCategoryCodes.push(category.code);
    } else {
      leafCategoryCodes = leafCategoryCodes.concat(childCategoryCodes);
    }
  }

  return leafCategoryCodes;
}
