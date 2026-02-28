import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/userModel.js";
import Resume from "./models/resumeModel.js";
import Service from "./models/serviceModel.js";
import Project from "./models/projectModel.js";
import Category from "./models/categoryModel.js";
import Testimonial from "./models/testimonialModel.js";
import connectDB from "./config/dbconfig.js";




dotenv.config();

connectDB();

const importData = async () => {
    try {
        await User.deleteMany();
        await Service.deleteMany();

        const createdUser = await User.create({
            name: "Admin User",
            email: "admin@gmail.com",
            role: "admin",
            password: "password123",
        });

        const demoServices = [
            {
                title: "Starter",
                description: "INDIVIDUAL",
                price: 50,
                icon: "package",
                features: ["UI/UX Design Strategy", "Mobile Responsive", "Basic User Research"]
            },
            {
                title: "Premium",
                description: "BUSINESS",
                price: 100,
                icon: "diamond",
                features: ["Advanced UI/UX", "Interactive Prototyping", "In-Depth User Testing", "Brand Identity"]
            }
        ];

        await Service.insertMany(demoServices);

        console.log("Data Imported! Admin User created: admin@gmail.com / password123");
        console.log("Demo Services imported!");
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
};

if (process.argv[2] === "-d") {
    // destroyData(); // Not implemented to be safe
} else {
    importData();
}
