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

const updateById = async (id, account) => {
  await db('accounts').where('id',id).update(account)
  return getById(id)
}

const deleteById = id => {
    return db('accounts').where('id', id).del()
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
