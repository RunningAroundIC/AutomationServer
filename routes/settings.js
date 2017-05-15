//Express
var express = require('express');
var router = express.Router();

//Schemas
var mongoose = require('mongoose');
var Settings = require('../models/settings.js');

//Routes
// GET ALL
router.get('', function(req, res, next) {
    Settings.find(function(err, settings) {
        if (err) return next(err);
        res.json(settings);
    });
});

// CREATE
router.post('', function(req, res, next) {
    Settings.create(req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

// GET BY ID
router.get('/:id', function(req, res, next) {
    Settings.findById(req.params.id, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

// UPDATE
router.put('/:id', function(req, res, next) {
    Settings.findOneAndUpdate(req.params.id, req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

// DELETE
router.delete('/delete/:id', function(req, res, next) {
    Settings.findByIdAndRemove(req.params.id, req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;