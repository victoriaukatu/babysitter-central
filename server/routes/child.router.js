const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route
 */
router.get('/', (req, res) => {
    const queryText = `SELECT "kids_information"."id", "kids_information"."firstname", "kids_information"."age", 
                        "kids_information"."gender" FROM kids_information`;
    pool.query(queryText)
      .then((result) => { res.send(result.rows); })
      .catch((error) => {
        console.log('Error completing the SELECT kids information query!', error);
        res.sendStatus(500);
      });
});

/**
 * POST route
 */
router.post('/newchild', (req, res) => {   
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
 * DELETE route
 */

router.delete('/:id', (req, res) => {
    const query = `
        DELETE FROM "kids_information"
        WHERE id = $1 AND user_id = $2;
    `;
    console.log('IN DELETE itemId: ', req.params.id);
    console.log('IN DELETE user id: ', req.user.id);

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