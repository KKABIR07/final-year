const Cropimage =require('../Models/crop_Images')


const PostcropImage = async (req, res) => {
    try {
        const { base64, name } = req.body;  

        
        const newImage = new Cropimage({
            Image: base64,  
            name: name      
        });

       
        await newImage.save();

        
        res.status(201).json({ message: 'Crop image uploaded successfully' });

    } catch (error) {
        console.error('Error posting data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


const getCropsImageByname = async (req, res) => {
    try {
      const districtName = req.params.name;
      
      const agri = await Cropimage.findOne({ name: districtName });
      
      if (!agri) {
        return res.status(404).json({ message: "Crop district not found" });
      }
      return res.status(200).json(agri);
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = {PostcropImage,getCropsImageByname};