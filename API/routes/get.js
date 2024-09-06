const Apps = require('../../functions/Apps');

const all = async (req, res) => {
    try {
        const data = await Apps.findAll();
        res.status(200).json({ success: true, data });
    } catch (error) {
        console.error('Error fetching all apps:', error);
        res.status(500).json({ success: false, message: 'An error occurred while fetching apps.' });
    }
};

const one = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Apps.findOne({ where: { id } });

        if (!data) {
            return res.status(404).json({ success: false, message: `App with ID ${id} not found.` });
        }

        res.status(200).json({ success: true, data });
    } catch (error) {
        console.error('Error fetching app:', error);
        res.status(500).json({ success: false, message: 'An error occurred while fetching the app.' });
    }
};

module.exports = { all, one };

