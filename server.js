import express from "express";

const app = express()
const port = process.env.PORT || 3000

// app.get('/', (req, res)=>{
//     res.send("Server is ready")
// })
app.get("/api/facts", (req, res)=>{
    const facts=[
        {
          "id": 1,
          "title": "Honey's Longevity",
          "content": "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible."
        },
        {
          "id": 2,
          "title": "Bananas are Berries",
          "content": "Botanically speaking, bananas are berries, while strawberries are not."
        },
        {
          "id": 3,
          "title": "Longest English Word",
          "content": "The longest word in the English language is 189,819 letters long and takes about three and a half hours to pronounce. It’s the chemical name for the protein known as titin."
        },
        {
          "id": 4,
          "title": "Octopus Hearts",
          "content": "An octopus has three hearts. Two pump blood to the gills, while the third pumps it to the rest of the body."
        },
        {
          "id": 5,
          "title": "Light Travel Time",
          "content": "It takes approximately 8 minutes and 20 seconds for light from the Sun to reach Earth."
        }
      ]
res.send(facts);      

    })
app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
})
