const express = require("express");
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

const app = express();

const port = 3000;

mongoose.connect("mongodb+srv://marcoabjr:xb369582@cluster0.oc1ahd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => 
    console.log('conectado ao MongoDb'))
.catch((err) => 
    console.log(err));

app.use(express.json());
app.use('/api/users', userRoutes);

app.listen(port ,() => {
    console.log(`Server estar rodando na ${port}`)
});


