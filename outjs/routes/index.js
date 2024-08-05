"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const customers = [];
const router = (0, express_1.Router)();
// GET
router.get('/', (req, res) => {
    res.json(customers);
});
// POST
router.post('/', (req, res) => {
    const newCustomer = {
        id: parseInt(req.body.id),
        name: req.body.name,
        birthDate: new Date(Date.parse(req.body.birthDate))
    };
    customers.push(newCustomer);
    res.status(201).json(newCustomer);
});
exports.default = router;
