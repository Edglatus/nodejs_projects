
const post = (request, response, model, name) => {
  Array.isArray(request.body) ? request.body.forEach((p) => model.create(p)) : model.create(request.body)
  response.send(name + ' added successfully.')
}

const getAll = (response, model) => {
  model.findAll().then((results) => {
    response.send(results)
  })
}

const getOne = (request, response, model, name) => {
  model.findByPk(request.params.id).then((results) => {
    if (results != null) {
      response.send(results)
    } else {
      response.send(name + ' not found.')
    }
  })
}

const put = (request, response, model, name) => {
  const updated = Array.isArray(request.body) ? request.body[0] : request.body

  model.update(updated, { where: { id: request.params.id } }).then((n) => {
    if (n[0] > 0) {
      response.send(name + ' updated successfully.')
    } else {
      response.send(name + ' not found.')
    }
  })
}

const del = (request, response, model, name) => {
  model.destroy({ where: { id: request.params.id } }).then((n) => {
    if (n > 0) {
      response.send(name + ' deleted successfully.')
    } else {
      response.send(name + ' not found.')
    }
  })
}

module.exports = { post, getAll, getOne, put, del }
