const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next))
        .catch((err) => next(err))
    }
}

export { asyncHandler }



// const asyncHandler = (fn) => (req, res, next) => {
//     try {
//         await fn(rq, res, next)        
//     } catch (error) {
//         res.send(err.code || 500).json({
//             status: false,
//             message: error.message
//         })
//     }
// }