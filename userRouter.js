const router = require("express").Router();
const User = require("./userSchema");
const bcrypt = require('bcryptjs');

router.post("/register", async (req, res) => {
    try {
        
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        });
        const savedUser = await user.save();

        res.json(savedUser);
    } catch (error) {
        console.error("Error registering user:", error.stack);
        res.status(500).send("Error registering user");
    }
});

module.exports = router;
