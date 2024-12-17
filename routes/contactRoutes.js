const express = require('express');
const router=express.Router();

const {
    getContact,
    CreateContact,
    GetContact,
    UpdateContact,
    deleteContact
}=require("../controllers/contactController");



router.route('/').get(getContact).post(CreateContact);

router.route('/:id').get(GetContact).put(UpdateContact).delete(deleteContact);

module.exports=router;