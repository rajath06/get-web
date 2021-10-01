const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb+srv://Admin:123@cluster0.3pxew.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

const noteSchema = {
    title: String,
    content: String
}

const Note = mongoose.model("Note", noteSchema);

app.get("/", function(req, res){
    Note.find({}, function(req, note){
        res.render(__dirname + "/views/index.ejs", {
            noteList: note
        })
    })
});
app.listen(1200, function(){
    console.log("Server running on port 1200");
});