const express = require('express')
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");
const app = express()
app.use(express.json({extends:true}))
const PORT = process.env.PORT || 8080

app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT,() =>{
    console.log(`API is Listening on port: ${PORT}`)
})