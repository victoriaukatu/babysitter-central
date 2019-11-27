const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * GET route
 */
router.get('/', rejectUnauthenticated, (req, res) => {
    const userID = req.user.id; 
    const queryText = `SELECT * FROM kids_information
                        WHERE "user_id" = $1`;
    pool.query(queryText, [userID])
      .then((result) => { res.send(result.rows); })
      .catch((error) => {
        console.log('Error completing the SELECT kids information query!', error);
        res.sendStatus(500);
      });
});

/**
 * POST route
 */
router.post('/newchild', rejectUnauthenticated, (req, res) => {   
// convert gender boolean to Male or Female
    let actualGender = req.body.gender
     if (actualGender === 'false'){
        actualGender = 'Male'
     }
     else{
        actualGender = 'Female'
     }
// convert nap boolean to Yes or No
     let actualNapStatus = req.body.nap
     if (actualNapStatus === 'false'){
        actualNapStatus = 'No'
     }
     else{
        actualNapStatus = 'Yes'
     }
// convert pottytrained boolean to Yes or No
     let actualPottytrained = req.body.pottytrained
     if (actualPottytrained === 'false'){
        actualPottytrained = 'No'
     }
     else{
        actualPottytrained = 'Yes'
     }
// SQL query
    const query = `
        INSERT INTO "kids_information" (firstname, age, picture, gender, allergies, nap, pottytrained, notes, parentname, phone, user_id)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);`;
pool.query(query, [req.body.firstname, req.body.age, req.body.picture, actualGender, req.body.allergies, actualNapStatus, actualPottytrained,
    req.body.notes, req.body.parentname, req.body.phone, req.user.id])
.then((response) => {
    console.log('POST new child information', response);
    res.sendStatus(200);
})
.catch((error) => {
    console.log('new child POST error', error);
    res.sendStatus(500);
});
})

/**
 * PUT route
 */

router.put('/newchild', rejectUnauthenticated, (req, res) => {  
    // SQL query
    const query = `
        UPDATE "kids_information" 
        SET firstname = $1, age = $2, picture = $3, gender = $4, allergies = $5, nap = $6,
        pottytrained = $7, notes = $8, parentname = $9, phone =$10, user_id = $11
        WHERE id = $12
    `;
    // update item in the database
    pool.query(query, [req.body.firstname, req.body.age, req.body.picture, req.body.gender, req.body.allergies, req.body.nap, req.body.pottytrained,
        req.body.notes, req.body.parentname, req.body.phone, req.user.id, req.body.id])
        .then((response) => {
            console.log( 'PUT response to update the database', response);
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('There was an error with the PUT request', error);
            res.sendStatus(500);
        });
});



/**
 * DELETE route
 */

router.delete('/newchild/:id', rejectUnauthenticated, (req, res) => {
    const query = `
        DELETE FROM "kids_information"
        WHERE id = $1 AND user_id = $2;
    `;
    console.log('IN DELETE kidId: ', req.params.id);
    console.log('IN DELETE user_id: ', req.user.id);

    pool.query(query, [req.params.id, req.user.id])
        .then((response) => {
            console.log('This is the kids database DELETE response', response);
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('There is an error in DELETE', error);
            res.sendStatus(500);
        }); 
});



module.exports = router;