// 目的：使用reduce 将categories objects 转换为数组下标为title，数组元素为item的数组Map
// before reduce:
const categories = [
  {
    title: "item-set0",
    items: [
      { id: 1, name: "item 0 1" },
      { id: 2, name: "item 0 2" },
    ],
  },
  {
    title: "item-set1",
    items: [
      { id: 3, name: "item 1 1" },
      { id: 4, name: "item 1 2" },
    ],
  },
];

console.log("categories: ", categories);

const categoriesMap = categories.reduce((accumulator, object) => {
  // destructure object: title = 'item-set0' and 'item-set1';
  // items = [ { id: 1, name: 'item 0 1' }, { id: 2, name: 'item 0 2' } ]
  // and     [ { id: 3, name: 'item 1 1' }, { id: 4, name: 'item 1 2' } ]
  const { title, items } = object;
  // assign title as array index name, and items as array element value:
  //   ['item-set0'] = [ { id: 1, name: 'item 0 1' }, { id: 2, name: 'item 0 2' } ]
  //   ['item-set1'] = [ { id: 3, name: 'item 1 1' }, { id: 4, name: 'item 1 2' } ]
  accumulator[title] = items;
  return accumulator;
}, {}); //accumulator starts as empty object

// console.log("categoriesMap: ", categoriesMap);
console.log("categoriesMap[0]: ", categoriesMap["item-set0"]);
console.log("categoriesMap[1]: ", categoriesMap["item-set1"]);

/** after reduce, those are key:value pairs
 * 
  categoriesMap:  {
  'item-set0': [ { id: 1, name: 'item 0 1' }, { id: 2, name: 'item 0 2' } ],
  'item-set1': [ { id: 3, name: 'item 1 1' }, { id: 4, name: 'item 1 2' } ]
}

 * 
 */
