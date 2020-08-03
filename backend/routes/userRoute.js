import express from 'express'

const router = express.Router();

router.get('/api/users/createadmin', async (req,res) => {

    try {

        const user = new User({
            name: "admin",
            email: "test@mail.org",
            password: '1234',
            isAdmin: true
        });
    
        const newUser = await user.save();
        res.send(user); 
        
    } catch (error) {
        res.send( {msg: error.message})
    }

});

export default router; 