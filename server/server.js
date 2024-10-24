const events = require('events');
events.EventEmitter.defaultMaxListeners = 15;

require("dotenv").config();
const express = require('express');
const cors = require('cors');
const connectDb = require('./DB/connect');
const authRouter = require('./router/auth-router'); 
const cropRouter = require('./router/Crops_Collection-router')
const getFertilizerPesticideData=require('./router/Fertilizers & Pesticides_Collection-router')
const getIrrigationTechniqueData =require('./router/Irrigation_Techniques-router')
const getPestDiseaseData = require('./router/Pest & Diseases_Collection-router')
const getRegionData=require('./router/Regions_Collection-router')
const getSoilTypeData=require('./router/SoilType_Collection-router')
const getImageData=require('./router/Image_router')


const app = express();

const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/crop", cropRouter);
app.use("/api/Fertilizer",getFertilizerPesticideData)
app.use("/api/Irrigation",getIrrigationTechniqueData)
app.use("/api/PestDisease",getPestDiseaseData)
app.use("/api/Region",getRegionData)
app.use("/api/Soil",getSoilTypeData)
app.use("/api/Image",getImageData)

app.get("/", (req, res) => {
    res.status(200).send("hello again mkb");
});

const PORT = 5000;

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`);
    });
});
