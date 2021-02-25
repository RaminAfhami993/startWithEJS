
function logger(req, res, next) {
    console.log(req.url);

    next()

};


// function logger() {
//     return function (req, res, next) {
//         console.log(req.url);
//         next()
//     }
// };


module.exports = logger;
