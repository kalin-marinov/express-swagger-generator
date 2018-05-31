
function handleError(err, req, res, next) {
    let status = 500;
    if (err.message.toLocaleLowerCase().includes("unauthorized")) status = 401;
    if (err.message.toLowerCase().includes("not found")) status = 404;

    let result = { message: err.message };
    res.status(status).json(result);
}


module.exports = handleError;