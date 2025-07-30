export const Error404 = (req, res, next) => {
    res.json({message: 'Route not found'});
}