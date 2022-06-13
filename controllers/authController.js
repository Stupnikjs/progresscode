
const jwt = require('jsonwebtoken')

const acceuil = (req, res) => {
    res.render('page/authgate')
}

const auth = (req, res) => {
    const {password} = req.body; 
    
    if (password === process.env.Auth_PASSWORD){
        const token = generateAccessToken()
        res.cookie("auth", token)
        res.redirect('/profile')
    } else { res.send('mdp incorrect')}

}

const authenticateToken = (req, res, next) => {
    const authHeader = req.cookies["auth"]; 
    
    var token = authHeader.split('.')[1]; 
    if (token == null) return res.sendStatus(401); 
    jwt.verify(authHeader, process.env.SECRET_KEY, (err) => {
      if (err) {console.log(err) ; res.redirect('/')}
      else next()
    })
  }

const generateAccessToken = () => {
    return jwt.sign({data: "michel"} , process.env.SECRET_KEY, {expiresIn: "3000000"})

}

module.exports = {auth, acceuil, authenticateToken}