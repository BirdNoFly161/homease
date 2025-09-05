// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
const Experience = require('./../models/experienceSchema')
// The current database to use.
use('homease');

// Create a new document in the collection.
db.getCollection('users').insertOne(
{
    "name":  "oussama",
    "email": "oussama@mailcom",
    "password":  "satledpass",
    "age": 25,
    "created_at": new Date(),
    "experience": {
        "role": "Data consultant",
        "company": "KPMG",
        "startDate": new Date(2024, 4, 29),
        "endDate": null
    },

    
    "ratings": [
    {
        rating: 5,
        comment: "worst employee ever dont hire please he stole my land, funny tho 5/5"
    },
    {
        rating: 5,
        comment: "handsome and skilled, i think im falling in love"
    }
    ]
    
}
);
