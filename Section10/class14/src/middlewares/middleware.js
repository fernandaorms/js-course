exports.globalMiddleware = (req, res, next) => {
    res.locals.localVariable = 'Local Variable Value';
    next();
}

exports.otherMiddleware = (req, res, next) => {
    console.log();
    console.log('This is another middleware');
    console.log();

    next();
}
