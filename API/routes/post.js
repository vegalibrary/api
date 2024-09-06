const Apps = require('../../functions/Apps');

const POST = async (req, res) => {
    try {
        const appData = req.body;

        if (!appData || Object.keys(appData).length === 0) {
            return res.status(400).json({ success: false, message: 'App data is required.' });
        }

        const newApp = await Apps.create(appData);

        res.status(201).json({ success: true, message: 'App added successfully!', data: newApp });
    } catch (error) {
        console.error('Error adding new app:', error);
        res.status(500).json({ success: false, message: 'An error occurred while adding the app.' });
    }
};

module.exports = POST;
