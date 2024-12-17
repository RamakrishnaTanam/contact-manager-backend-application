const asyncHandler=require("express-async-Handler")
const Contact=require("../models/contactModel");
// contactController.js
//@desc Get all contacts
//@route GET/api/contacts
//@access public
const getContact=asyncHandler(async (req,res)=>{
    const contacts= await Contact.find();
    res.status(200).json(contacts);
});
//@desc CREATE new contacts
//@route POST/api/contacts
//@access public
const CreateContact=asyncHandler(async(req,res)=>{
    console.log("The Request body is :",req.body);
    const {name,email,phone}=req.body;

    if(!name || !email ||!phone){
        res.status(400);
        throw new Error("All fields are required");
    }
    res.status(201).json({message:"Get all contacts"});
});

//@desc get contacts
//@route POST/api/contacts/:id
//@access public
const GetContact=asyncHandler(async(req,res)=>{
    res.status(200).json({message:`Get contact for ${req.params.id}`});
});
//@desc update  contacts
//@route put /api/contacts/:id
//@access public
const UpdateContact=asyncHandler(async(req,res)=>{
    res.status(200).json({message:`Update contact for ${req.params.id}`});
});
//@desc delete  contact
//@route delete /api/contacts/:id
//@access public
const deleteContact=asyncHandler(async(req,res)=>{
    res.status(200).json({message:`delete contact ${req.params.id}`});
});


module.exports={getContact,CreateContact,GetContact,UpdateContact,deleteContact};