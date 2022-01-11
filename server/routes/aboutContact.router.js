const express = require('express');
const pool = require('../modules/pool');
const aboutRouter = express.Router();

/**
 * GET route template
 */
aboutRouter.get('/', (req, res) => {
    const query = `SELECT * FROM "about_us";`
    
    pool.query(query)
        .then( result => {
        res.send(result.rows[0]);
        console.log(result.rows[0])
        })
        .catch(err => {
        console.log('ERROR: GET about Info', err);
        res.sendStatus(500)
        })

});



aboutRouter.put('/', (req, res) => {

  const sqlText = `
    UPDATE "about_us"
      SET "image_url" = $1, 
          "about_us" = $2, 
          "owner_name" = $3, 
          "truck_number" = $4, 
          "email" = $5, 
          "instagram" = $6, 
          twitter = $7, 
          current_location = $8, 
          next_location = $9, 
          schedule = $10
        WHERE "id" = 1;
    `

    const sqlValues = [
      req.body.image_url, 
      req.body.about_us,
      req.body.owner_name, 
      req.body.truck_number, 
      req.body.email, 
      req.body.instagram, 
      req.body.twitter, 
      req.body.current_location, 
      req.body.next_location, 
      req.body.schedule
    ];

    pool.query(sqlText, sqlValues)
  .then(res => {
    console.log('PUT happened')
}).catch(err => {
    console.log(err);
    res.sendStatus(500)
  })
});



module.exports = aboutRouter;