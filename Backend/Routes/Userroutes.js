import express from "express";
import Applicants from "../Models/User.js";

const app = express();
app.use(express.json()); // Make sure to parse JSON body

// Add a new user
export const Adduser = async (req, res) => {
    try {
        const { Username, email, Phoneno, Company, Address, Website } = req.body;

        // Basic validation (optional, but good practice)
        if (!Username || !email || !Phoneno || !Company || !Address || !Website) {
            return res.status(400).json({ message: "All fields are required." });
        }

        const user = new Applicants({
            Username,
            email,
            Phoneno,
            Company,
            Address,
            Website,
        });

        await user.save();

        console.log("User added successfully.");
        res.status(201).json(user);
    } catch (error) {
        console.error("AddUser error:", error.message);
        res.status(500).json({ message: "Server error while adding user." });
    }
};

// Get all users
export const getuser = async (req, res) => {
    try {
        const users = await Applicants.find({});
        res.status(200).json(users);
    } catch (error) {
        console.error("GetUser error:", error.message);
        res.status(500).json({ message: "Server error while fetching users." });
    }
};
