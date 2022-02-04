const eventRepo = require('../database/repository/eventRepo');

exports.getEvents = async (req, res, next) => {
    try {
        const events = await eventRepo.getEvents();

        if (!events) console.warn('No events available');

        return res.status(200).json({
            status: 'success',
            data: events
        });

    } catch (error) {
        next(error);
    }
};