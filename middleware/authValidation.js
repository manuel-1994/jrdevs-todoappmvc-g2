const jwt = require('jsonwebtoken')
const config = require("../config")
const obtainRol=(token, validation, req, res, next)=>{
  if (!token){
    return  res.status(403).json({message: 'Se necesita un token para acceder'})
  }

  try {
    const decodedToken = jwt.verify(token, config.jwt_secret)
    const {rol} = decodedToken
    if(validation==='general'){
      req.user = decodedToken
      return next()
    }else if(validation==='admin' && rol==='admin'){
      req.user = decodedToken
      return next()
    }
  } catch (error) {
    return res.status(401).json({message:"Token invalido"})
  }
  return res.status(403).json({message:"No cuentas con permisos necesarios"})
}

const verifyToken = (req,res,next) =>{
  const {token}= req.cookies
  obtainRol(token,'general',req,res,next)
}

const verifyTokenAdmin = (req,res,next) =>{
  const {token}= req.cookies
  obtainRol(token,'admin',req,res,next)
}

module.exports={
  verifyToken,
  verifyTokenAdmin
}