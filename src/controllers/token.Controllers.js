
const jwt = require('jsonwebtoken');

const tokenController = {}

const secret = process.env.CLAVE_SECRETA_TOKKEN;
const payload = {usuario: 'NombreDeUsuaro',  };

tokenController.getToken = async(req,res)=>{
    const token = jwt.sign(payload, secret);
    res.json(token)
}


tokenController.validarToken = async(req, res, next) => {
    //Veo si tiene su token correctamente
    const authorization = (req.headers.authorization || req.headers.Authorization)
     // si no viene el token en los headers
  if (!authorization) {
    console.log(`No se encontro token en los headers`)

    return res
      .status(401)
      .json({
        msg: 'No hay token',
        loggedIn: false
      })
  }
    const token = authorization.split(' ')[1]
    if(!token){
      console.log(`No se encontro token en los headers`)
      return res
      .status(401)
      .json({
        msg:'No hay token',
        loggedIn: false})
    }
    try {
      jwt.verify(token,process.env.CLAVE_SECRETA_TOKKEN)
    } catch (error) {
      console.log(`Error en verify_token: ${error}`)
      return res
        .status(401).json({
        msg:'Algo salio mal',
        loggedIn: false
      })
    }
  next()
}





module.exports = tokenController 
