import { get } from 'lodash';

/**
 * @param list (Array) list of objects
 * @param keyGetter (Function) function responsible for obtaining the grouping key
 */
const groupBy = (list, keyGetter) => {
  const map = new Map();
  list.forEach(item => {
    const key = keyGetter(item);
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });
  return map;
};

const DataParser = {
  getItemsByCategory: data => {
    const [groups] = data ? get(data, 'response.groups', []) : [];

    if (!groups) {
      return new Map();
    }

    return groupBy(groups.items, item => {
      const [category] = item.venue.categories;
      return category.id;
    });
  },
};

export { DataParser };
