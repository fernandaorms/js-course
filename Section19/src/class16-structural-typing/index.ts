type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUserFn = (user, sentValue) => {
    return (
        user.username === sentValue.username && user.password === sentValue.password
    );
};

const bdUser = { username: 'john', password: '123456' };
const sentUser = { username: 'john', password: '12345', random: ''};
const loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn ? 'User Logged In' : 'Wrong Credentials');

// Module mode
export default 1;
