// defineProperty -> Getters and Setters

function Product(pName, price, inventory) {
    this.pName = pName;
    this.price = price;

    Object.defineProperty(this, 'inventory', {
        enumerable: true,
        configurable: true,
        get: function() {
            return inventory;
        },
        set: function(number) {
            if(typeof(number) != 'number') throw new TypeError('Error! Not a number!');
            
            inventory = number;
        }
    });
}

const p1 = new Product('Camiseta', 20, 3);

//console.log(p1);
// p1.inventory = 'Random phrase';
p1.inventory = 10;

console.log(p1.inventory);

function createStudent(firstName) {
    return {
        get firstName() {
            return firstName;
        },
        set firstName(value) {
            firstName += ' ' + value;
        }
    }
}

const student = createStudent('John');

student.firstName = 'Doe';

console.log(student.firstName);