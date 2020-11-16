/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2020-11-16 17:53:32
 * @LastEditors: zhongconghai
 * @LastEditTime: 2020-11-16 20:30:28
 */
var input = [
	{ id: 1, parentId: 0 },
	{ id: 2, parentId: 1 },
	{ id: 3, parentId: 2 },
	{ id: 4, parentId: 3 },
	{ id: 5, parentId: 2 },
	{ id: 6, parentId: 4 },
	{ id: 7, parentId: 0 },
];

// let obj = [];
// input.forEach((item, index) => {
//   obj[item.id] = {
//     id: item.id,
// 		parentId: item.parentId,
// 		children: [],
// 	};
// });

// let res = [];
// obj.forEach((item, index) => {
//   if (item.parentId === 0) {
//     res.push(item);
// 	} else {
//     obj[item.parentId].children.push(item);
// 	}
// });

// console.log(res);

function transform(arr) {
	let result = [];
	let obj = {};
	arr.forEach((item, index) => {
		obj[item.id] = index;
	});
	arr.forEach((item) => {
		if (item.parentId > 0) {
			item.children || (item.children = []);
			let index = obj[item.parentId];
			arr[index].children || (arr[index].children = []);
			arr[index].children.push(item);
		} else {
			result.push(item);
		}
	});
	return [result];
}
console.log(transform(input));

/*
var output = [
  {
    id: 1,
    parentId: 0,
    children: [
      {
        id: 2,
        parentId: 1,
        children: [
          {
            id: 3,
            parentId: 2,
            children: [
              { id: 4, parentId: 3, children: [{ id: 6, parentId: 4 }] },
            ],
          },
          { id: 5, parentId: 2, children: [] },
        ],
      },
    ],
  },
  { id: 7, parentId: 0 },
]
*/
