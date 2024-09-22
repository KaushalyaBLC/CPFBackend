const Industry = require('../models/IndustrySchema');

const careersController = async (req, res) => {
    const parameter = req.params.industry; 
    try{
    const result = await Industry.findOne({ path: parameter });

    if (!result) {
        return res.status(404).send('Industry not found'); // Corrected response handling
    }
    res.status(200).json(result); // Send result as JSON
}
catch(err){
    console.error(`Error recieving from db ${err}`);
    res.status(500).json("Server Error!"); 
}
};

module.exports = careersController;
