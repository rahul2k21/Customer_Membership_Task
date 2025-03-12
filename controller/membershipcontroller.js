const Membership = require("../models/Membership");

exports.createMembership = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) return res.status(400).json({ message: "Membership name is required" });

        const newMembership = new Membership({ name });
        await newMembership.save();
        res.status(201).json(newMembership);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAllMemberships = async (req, res) => {
    try {
        const memberships = await Membership.find();
        res.json(memberships);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getMembershipById = async (req, res) => {
    try {
        const membership = await Membership.findById(req.params.id);
        if (!membership) return res.status(404).json({ message: "Membership not found" });
        res.json(membership);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateMembership = async (req, res) => {
    try {
        const updatedMembership = await Membership.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updatedMembership);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteMembership = async (req, res) => {
    try {
        await Membership.findByIdAndDelete(req.params.id);
        res.json({ message: "Membership deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
