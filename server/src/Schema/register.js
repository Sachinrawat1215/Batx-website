const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const loginSchema = new mongoose.Schema({
    userid: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
});

loginSchema.methods.authenticationToken = async function () {
    try {
        let token = jwt.sign({ _id: this._id }, process.env.JWT_TOKEN_SECRET);
        this.tokens = this.tokens.concat({token: token});
        await this.save();
        return token;
    } catch (error) {
        // response.status(500).json({ status: false, message: 'Failed to create token' });
        console.log('failed to generate token');
    }
};

const registerModel = mongoose.model('register-data', loginSchema);

module.exports = registerModel;