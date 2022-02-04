exports.getHome = async (req, res, next) => {
    try {
    return res.status(200).json({status: 'success', data: { title: "Fig Assessment", message: "Hello" }});
    } catch (error) {
        next(error);
    }
};