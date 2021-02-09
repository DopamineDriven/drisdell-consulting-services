export class Serialize<T> {
	serialize(inp: T): string {
		return JSON.stringify(inp);
	}

	deserialize(inp: string): JSONified<T> {
		return JSON.parse(inp);
	}
}

// toJSON returns this obj for serializaton
// despite any other properties this type has
type Widget = {
	toJSON(): {
		kind: 'Widget';
		date: Date;
	};
};

export type Item = {
	//reg primitive types
	text: string;
	count: number;
	// options are preserved
	choice: 'yes' | 'no' | null;
	//functions get dropped
	func: () => void;
	// nested elements parsed as well
	nested: {
		isSaved: boolean;
		data: [1, undefined, 2];
	};
	// a pointer to another type
	widget: Widget;
	// The same obj referenced again
	children?: Item[];
};

type JSONified<T> = JSONifiedValue<T extends { toJSON(): infer U } ? U : T>;

type JSONifiedValue<T> = T extends string | number | boolean | null
	? T
	: T extends Function
	? never
	: T extends object
	? JSONifiedObject<T>
	: T extends Array<infer U>
	? JSONifiedArray<U>
	: never;

// recursion
type JSONifiedObject<T> = {
	[P in keyof T]: JSONified<T[P]>;
};

// if there is an undefined element in JSONifiedArray
// JSON.stringify will map that element to null -- need another helper
type UndefinedAsNull<T> = T extends undefined ? null : T;

type JSONifiedArray<T> = Array<UndefinedAsNull<JSONified<T>>>;
