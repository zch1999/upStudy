/**
 * @file: description
 * @author: zhongconghai
 * @Date: 2020-10-12 22:53:33
 * @LastEditors: zhongconghai
 * @LastEditTime: 2020-10-13 00:00:41
 */
let x: {
	a: { m: 3; z1: 2 };
	b: { n: 5; z2: 3 };
};

let a: keyof (keyof typeof x);

type test<T extends typeof x> = {
	[Z in keyof (keyof T)]: string;
};

type y1 = {
	m: string;
	n: string;
	z1: string;
	s2: string;
};

let xx: test<typeof x>;

// & {
//   [Z in keyof T['b']]:string
// }
