const registerModel = require('../Schema/register');
const bcrypt = require('bcrypt');
const { response } = require('express');

const registerUser = async (request, response) => {
    try {
        const { userid, password } = request.body;

        // checking for both input
        if (!userid || !password) {
            response.status(406).json({ status: false, message: 'Fill Input' });
        } else {
            const res = await registerModel.findOne({ userid });
            // checking user already register or not
            if (res) {
                response.status(400).json({ status: false, message: 'User Already Registered' });
            } else {
                // Genuine case
                const cryptedPassword = await bcrypt.hash(password, 10);
                const data = new registerModel({ userid, password: cryptedPassword });
                await data.save();
                response.status(200).json({ status: true, message: 'Registered' });
            }
        };
    } catch (error) {
        response.status(500).json(error);
    };
};

const loginUser = async (request, response) => {
    try {
        const { userid, password } = request.body;
        if (!userid || !password) {
            response.status(406).json({ status: false, message: 'Fill Input' });
        } else {
            const userData = await registerModel.findOne({ userid });
            if (!userData) {
                response.status(404).json({ status: false, message: 'User Not Registered' });
            } else {
                const comparePassword = await bcrypt.compare(password, userData.password);
                if (comparePassword) {
                    const token = await userData.authenticationToken();
                    console.log('this token', token);

                    response.cookie("authtoken", token, {
                        expires: new Date(Date.now() + 2592000000),
                        httpOnly: true,
                    });

                    response.status(200).json(userData);
                } else {
                    response.status(406).json({ status: false, message: 'Wrong Password' });
                }
            }
        }
    } catch (error) {
        response.status(500).json(error);
    }
};

const getData = async (request, response) => {
    try {
        const data = request.rootUser;
        response.status(200).json(data);
    } catch (error) {
        response.status(500).json(error);
    }
};

const logoutUser = async (request, response) => {
    try {
        console.log('this is main', request.rootUser.tokens);
        request.rootUser.tokens = request.rootUser.tokens.filter((element) => {
            return element.token !== request.token;
        });

        // console.log(request.rootUser.tokens);

        response.clearCookie('authtoken');

        await request.rootUser.save();

        response.status(200).json({status: true, message: 'logout sucessfull'});
    } catch (error) {
        response.status(500).json(error);
    }
}

module.exports = { registerUser, loginUser, getData, logoutUser };