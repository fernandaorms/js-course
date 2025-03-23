const objectA: {
    readonly keyA: string;
    keyB: string;
    keyC?: string;
    [key: string]: unknown;
} = {
    keyA: 'Value A',
    keyB: 'Value B',
};

objectA.keyB = 'Other value';
objectA.keyC = 'New value';
objectA.keyD = 'New key';

console.log(objectA);

// Module mode
export default 1;
