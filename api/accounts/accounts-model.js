const db = require('../../data/db-config')

const getAll = () => {
  //select * from accounts
  return db('accounts')
}

const getById = id => {
  // select * from accounts where id = 1
  return db('accounts').where('id', id).first()
  //if account defined like this does not exist, the function will result in 'undefined'
}

const create = async account => {
  const [id] = await db('accounts').insert(account)
  return getById(id)
}

const updateById = (id, account) => {
  // DO YOUR MAGIC
}

const deleteById = id => {
  // DO YOUR MAGIC
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
