export function createError(): never {
    throw new Error('Some random error');
}

createError();

// Module mode
export default 1;
