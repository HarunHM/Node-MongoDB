let express = require("express");
let mongoose = require("mongoose");
let app = express();
let port = 3000;
 
mongoose.connect("mongodb://localhost:27017/nodelux", {useNewUrlParse:true});

app.use("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
   });

let nameSchema = new mongoose.Schema({
    firstName: String,
    lastNameName: String,
    email: String,
    phoneNumber: String,
    comment: String
   });

let User = mongoose.model("User", nameSchema);


app.post("/addname", (req, res) => {
    var myData = new User(req.body);
    myData.save()
    .then(item => {
    res.send("item saved to database");
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
   });

app.listen(port, () =>
       console.log(`Express serving at http://localhost:${port}`))