import * as Tester from '../src/main';

const multiply = (x: number, y: number): number => {
	return x * y;
};
Tester.assert({ method: { _function: multiply, args: [3, 2], expect: 6 }, logIfFailOnly: true });
Tester.assert({ method: { _function: multiply, args: [3, 2], expect: 7 }, logIfFailOnly: true });
Tester.assert({ method: { _function: multiply, args: [3, 2], expect: '6' }, logIfFailOnly: true });
Tester.assert({
	method: {
		_function: multiply,
		multiple: [
			{ args: [3, 2], expect: 6 },
			{ args: [3, 2], expect: '6' },
			{ args: [3, 2], expect: 7 },
		],
		description: '${multiple[i].args[0]} * ${multiple[i].args[1]} = ${multiple[i].expect}',
	},
	logIfFailOnly: true,
	showOnlyFields: ['expect', 'result', 'equal'],
});

const concat = (prm1: any[], prm2: any[]): any[] => {
	if (Array.isArray(prm1) && Array.isArray(prm2)) return prm1.concat(prm2);
	if (prm1 && Array.isArray(prm2)) return prm1.concat(prm2);
	else return { ...prm1, ...prm2 };
};
Tester.assert({
	method: {
		_function: concat,
		multiple: [
			{
				args: [
					[1, true],
					['any', 'true'],
				],
				expect: [1, true, 'any', true],
			},
			{
				args: [
					[1, true],
					['any', 'true'],
				],
				expect: [1, true, 'any', 'true'],
			},
			{
				args: [
					{ x1: 1, val: true },
					{ x2: 'any', val: 'true' },
				],
				expect: { x1: 1, val: 'true', x2: 'any' },
			},
			{
				args: [
					{ x1: 1, val: 'true' },
					{ x2: 'any', val: true },
				],
				expect: { x1: 1, val: 'true', x2: 'any' },
			},
		],
	},
	logIfFailOnly: true,
	showOnlyFields: ['expect', 'result', 'equal'],
});