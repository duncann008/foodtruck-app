const express = require('express');
const pool = require('../modules/pool');
const contactRouter = express.Router();

/**
 * GET route template
 */
contactRouter.get('/:id', (req, res) => {
    const query = `SELECT * FROM "contact_info" WHERE "user_id" = $1`;
    const values = req.params.id;

    pool.query(query, [values])
        .then( result => {
        res.send(result.rows[0]);
        })
        .catch(err => {
        console.log('ERROR: GET Contact Info', err);
        res.sendStatus(500)
        })

});

/**
 * POST route template
 */
contactRouter.post('/', (req, res) => {
  // POST route code here
  const sqlText = `
  INSERT INTO "contact_info" ("first_name", "last_name", "phone_number", "email", "user_id")
  VALUES ($1, $2, $3, $4, $5)
  RETURNING "id";`

  const sqlValues = [
      req.body.first_name, req.body.last_name, req.body.phone_number, req.body.email, req.body.user_id
  ]

  pool.query(sqlText, sqlValues)
  .then(result => {
    console.log('Contact Info Added:', result.rows[0].id);
}).catch(err => {
    console.log(err);
    res.sendStatus(500)
  })
});

contactRouter.put('/:id', (req, res) => {

  const contactIdToUpdate = req.params.id;
  let contactInfo = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    phone_number: req.body.phone_number,
    email: req.body.email
  }
  const sqlText = `
    UPDATE "contact_info"
      SET first_name = $2, 
      SET last_name = $3,
      SET phone_number = $4,
      SET email = $5
        WHERE "id" = $1;
    `

    const sqlValues = [contactIdToUpdate, contactInfo];

    pool.query(sqlText, sqlValues)
  .then(result => {
    result.sendStatus(200);
}).catch(err => {
    console.log(err);
    res.sendStatus(500)
  })
});



module.exports = contactRouter;