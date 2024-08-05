import { Router } from "express";
import { Customer } from '../models/cliente';

const customers : Customer[] = [];
const router = Router();
// GET
router.get('/', (req, res) => {
res.json(customers);
})
// POST
router.post('/', (req, res) => {
const newCustomer : Customer = {
id: parseInt(req.body.id),
name: req.body.name,
birthDate: new Date(Date.parse(req.body.birthDate))
};
customers.push(newCustomer);
res.status(201).json(newCustomer);
})
export default router;