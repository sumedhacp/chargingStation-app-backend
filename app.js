const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://sumedha:sumu123@cluster0.jv4x88s.mongodb.net/vehicledb").then(

    () => {
        console.log("MongoDB Connected")
    }

).catch(

    (error) => {

        console.log(error)

    }

)

const Vehicle = mongoose.model("Vehicles", new mongoose.Schema(

    {
        bookingId: String,
        ownerName: String,
        email: String,
        phone: String,
        vehicleRegistrationNumber: String,
        vehicleBrand: String,
        vehicleModel: String,
        batteryCapacityKwh: String,
        connectorType: String,
        chargingDate: String,
        timeSlot: String,
        estimatedUnitsKwh: String,
        chargingBayNumber: String
    }

))

app.post("/add-vehicle", async (request, response) => {

    await Vehicles.create(request.body)

    response.json({ "status": "success" })

})

app.get("/view-vehicle", async (request, response) => {

    const Vehicles = await Vehicle.find()

    response.json(Vehicles)

})

app.listen(3000, () => {

    console.log("server started")

})