const Customer = require("../models/Customer");


exports.createCustomer = async (req, res) => {
    try {
        const { firstName, lastName, email, contactNumber, status, membershipID } = req.body;

        if (!firstName || !lastName || !email || !contactNumber || !status || !membershipID) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newCustomer = new Customer({ firstName, lastName, email, contactNumber, status, membershipID });
        await newCustomer.save();
        res.status(201).json(newCustomer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAllCustomers = async (req, res) => {
    try {
        const customers = await Customer.find().populate("membershipID", "name");
        res.json(customers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getCustomerById = async (req, res) => {
    try {
        const customer = await Customer.findById(req.params.id).populate("membershipID", "name");
        if (!customer) return res.status(404).json({ message: "Customer not found" });
        res.json(customer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateCustomer = async (req, res) => {
    try {
        const updatedCustomer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedCustomer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteCustomer = async (req, res) => {
    try {
        await Customer.findByIdAndDelete(req.params.id);
        res.json({ message: "Customer deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
