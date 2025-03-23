type Age = number;
type Person = {
    name: string;
    age: Age;
    salary: number;
    favoriteColor?: string;
};
type ColorRGB = 'Red' | 'Green' | 'Blue'; // OR
type ColorCMYK = 'Cian' | 'Yellow' | 'Black';
type FavoriteColor = ColorRGB | ColorCMYK;

const person: Person = {
    age: 23,
    name: 'Fernanda',
    salary: 200_000,
};

export function setFavoriteColor(person: Person, color: FavoriteColor): Person {
    return { ...person, favoriteColor: color };
}

console.log(setFavoriteColor(person, 'Blue'));
console.log(person);

// Module mode
export default 1;
