const Accounts = require('./accounts-model')

exports.checkAccountPayload = (req, res, next) => {
  
}

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

exports.checkAccountId = async (req, res, next) => {
  try{
    const account = await Accounts.getById(req.params.id)
    if(!account){
      res.status(404).json({
        message: 'Account not found with that ID'
      })
    }
    else{
      req.account = account
      next()
    }
  }
  catch (err){
    next(err)
  }
}

