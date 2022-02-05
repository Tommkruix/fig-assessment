const eventRepo = require('../database/repository/eventRepo');

exports.getEvents = async (req, res, next) => {
    try {
        const events = await eventRepo.getEvents();

        if (!events) return res.status(404).json({
            status: 'success',
            data: []
        });

        return res.status(200).json({
            status: 'success',
            data: events
        });

    } catch (error) {
        next(error);
    }
};