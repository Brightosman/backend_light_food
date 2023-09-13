require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect("mongodb+srv://brightosman:Kh4HxqeQyZfmutz@cluster0.xzthr.mongodb.net/afro-shop2?retryWrites=true", {
    useNewUrlParser: true,
    useUnifiedTopology: true
 }).then(con => {
    console.log(`MongoDB Database connected`)
 })
}

module.exports = connectDatabase