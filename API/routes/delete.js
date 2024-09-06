const Apps = require('../../functions/Apps');

const DELETE = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedCount = await Apps.destroy({ where: { id } });

        if (deletedCount === 0) {
            return res.status(404).json({ success: false, message: `App with ID ${id} not found.` });
        }

        res.status(200).json({ success: true, message: 'App deleted successfully.' });
    } catch (error) {
        console.error('Error deleting app:', error);
        res.status(500).json({ success: false, message: 'An error occurred while deleting the app.' });
    }
};

module.exports = DELETE;
