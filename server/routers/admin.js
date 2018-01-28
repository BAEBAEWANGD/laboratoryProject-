/**
 * Created by ubuntu on 18-1-26.
 */
const express = require('express');

const router = express.Router();

let db = require('../dbs/connection');
let signSQL = require('../dbs/signSQL');


router.post('/userList', (req, res) => {
    db.query(signSQL.myAllStudent, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.json(result);
    });
});
router.post('/deleteList', (req, res) => {
    const id = req.body.id;
    db.query(signSQL.deleteStu, id, (err, result) => {
        if (err) {
            console.log(err);
        }
    });
    db.query(signSQL.deleteUser, id, (err, result) => {
        if(err){
            console.log(err);
        }
    });
    db.query(signSQL.deleteUser, id, (err, result) => {
        if(err){
            console.log(err);
        }
    });
    db.query(signSQL.myAllStudent, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.json(result);
    });
});
module.exports = router;