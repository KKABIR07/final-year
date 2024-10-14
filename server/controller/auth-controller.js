
const Agriculture = require('../Models/crop');
const User = require("../Models/Users_module");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
    try {
        res.status(200).send("hello mkb");
    } catch (error) {
        res.status(500).send("error");
    }
};

const getAgricultureData = async (req, res) => {
    try {
        const data = await Agriculture.find({});
        res.json(data);
    } catch (error) {
        console.error('Error fetching agriculture data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const getCropsByid = async (req, res) => {
  try {
      const id = req.params.id;
      
      const agri = await Agriculture.findById(id);
      
      if (!agri) {
          return res.status(404).json({ message: "Crop dist not found" });
      }
      return res.status(200).json(agri);
  } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ error: "Internal Server Error" });
  }
};




const register = async (req, res) => {
    try {
        const { username, email, phone, password, cpassword } = req.body;

        if (!username || !email || !phone || !password || !cpassword) {
            return res.status(400).json({ msg: "All fields are required" });
        }

        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ msg: "Email already exists" });
        }

        if (password !== cpassword) {
            return res.status(400).json({ msg: "Passwords do not match" });
        }

        const saltRound = 10;
        const hash_password = await bcrypt.hash(password, saltRound);

        const userCreated = await User.create({ username, email, phone, password: hash_password });
        const token = await userCreated.generateToken();

        res.status(200).json({ msg: "User registered successfully", token, userId: userCreated._id.toString() });
    } catch (error) {
        res.status(500).json({ msg: "Error registering user", error });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ msg: "All fields are required" });
        }

        const userExist = await User.findOne({ email });

        if (!userExist) {
            return res.status(400).json({ msg: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, userExist.password);

        if (isMatch) {
            res.status(200).json({
                msg: "Login successful",
                token: await userExist.generateToken(),
                userId: userExist._id.toString(),
                username: userExist.username,
            });
        } else {
            res.status(401).json({ msg: "Invalid credentials" });
        }
    } catch (error) {
        res.status(500).json({ msg: "Internal server error", error });
    }
};


const dist = async (req, res) =>{
    try {
        const { District, Crops } = req.body;
        
        
        const newAgriculture = new Agriculture({
            District,
            Crops,
        });

        
        const savedAgriculture = await newAgriculture.save();
        
        res.status(201).json(savedAgriculture);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error saving agriculture data' });
    }
} ;



module.exports = { home, getAgricultureData,getCropsByid,register,login,dist };


