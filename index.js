const express = require('express');
const cors = require('cors');
const app = express();
const tagInfo = require('./Model/storeData.js')
require('./connection.js');                 // connection to mongodb 
const PORT = process.env.PORT || 4200;
app.use(express.json());

// to share resources with other sites
app.use(cors());

// following is the api to send html element as an response
app.post('/qwerty',async(req,res)=>{
    const data = `<h1>${req.body.welcome_txt}</h1>`+`<p>${req.body.paragraph}</p>`;   //storing html element to variable
    const newData = new tagInfo({
        welcome_txt: req.body.welcome_txt,
        paragraph: req.body.paragraph
    })

    const result = await newData.save();                              // storing the result
    res.send(data)                                                                    // sending response with html element
})

// application should listen on given port
app.listen(PORT,()=>{
    console.log(`Running on port ${PORT}`);
})