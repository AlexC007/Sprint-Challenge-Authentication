/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/
const bycrpt = require("bcryptjs")


const Users = require('../jokes/jokes-router')

module.exports = (req, res, next) => {
  if(req.session && req.session.user){
    next();
  } else {
    res.status(401).json({message:" Please sign in"})
  }
  /*const { username, password } = req.headers;

  if (username && password) {
    Users.findBy({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          next();
        } else {
          res.status(401).json({ you: 'Shall not pass' });
        }
      })
      .catch(error => {
        res.status(500).json({ you: 'Thought, try again' });
      });
  } else {
    res.status(400).json({ message: 'Please provide the necessary credentials' });
  }*/
};
