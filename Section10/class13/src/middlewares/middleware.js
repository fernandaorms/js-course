exports.globalMiddleware = (req, res, next) => {
    if(req.body.inputName) {
        console.log();
        console.log(`Name: ${req.body.inputName}`);
        console.log();
    }
    
    next();
}

exports.otherMiddleware = (req, res, next) => {
    console.log();
    console.log('This is another middleware');
    console.log();

    next();
}
