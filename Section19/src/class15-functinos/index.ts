type MapStringsCallback = (item: string) => string;

export function mapStrings(
    array: string[],
    callbackfn: MapStringsCallback,
): string[] {
    const newArray: string[] = [];

    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        newArray.push(callbackfn(item));
    }

    return newArray;
}

const abc = ['a', 'b', 'c'];
const abcMapped = mapStrings(abc, (item) => item.toUpperCase());
console.log(abc);
console.log(abcMapped);

const upperCase = (item: string) : string => {
    return item.toUpperCase();
}

const def = ['d', 'e', 'f'];
const defMapped = mapStrings(def, upperCase);
console.log(def);
console.log(defMapped);

// Module mode
export default 1;
