// Create Instance of router from Express
const express = require("express");
const router = express.Router();

// import User model
const Celebrity = require('../models/Celebrity')

router.get('/', (req, res, next) => {

    Celebrity
        .find() //returns array of celebs from DB
        .then((listOfCelebs) => {

            console.log('List of Celebs ------------ ', listOfCelebs);

            // Pass the array into the requested hbs file 
            //                              |---------^
            //                              v
            res.render('celeb-list', listOfCelebs);

        })
        .catch((err) => {
            console.log('Error Retrieving List of Celebs');
            next(err);
        })

})

router.get('celeb/celeb-create.hbs', (req, res, next) => {
        res.render('celeb/celeb-creation');
})