const Apps = require('../../functions/Apps');

const PUT = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        
        const [affectedRows] = await Apps.update(updateData, { where: { id } });

        if (affectedRows === 0) {
            return res.status(404).json({ success: false, message: `App with ID ${id} not found or no changes made.` });
        }

        res.status(200).json({ success: true, message: 'App updated successfully.' });
    } catch (error) {
        console.error('Error updating app:', error);
        res.status(500).json({ success: false, message: 'An error occurred while updating the app.' });
    }
};

module.exports = PUT;
