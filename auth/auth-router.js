const express = require('express');
const bcrypt = require('bcryptjs');
//const router = require('express').Router();
const router = express.Router()
const Users = require('./auth-model')

router.get('/', (req,res)=>{
  res.status(200).json({message: "good job"});
})

router.post('/register', (req, res) => {
  // implement registration
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 12);
  user.password = hash;

  Users.add(user)
    .then(added => {
      res.status(201).json(added);
    })
    .catch(error => {
      res.status(500).json({message:"nothing registered"});
    });
});

router.post('/login', (req, res) => {
  // implement login
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        req.session.user = user;
        res.status(200).json({
          message: `Welcome, ${user.username}!`,
        });
      } else {
        res.status(401).json({ errorMessage: 'Credentials Not Found' });
      }
    })
    .catch(error => {
      res.status(500).json({message:"try again"});
    });
});

module.exports = router;
