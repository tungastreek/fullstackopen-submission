import axios from 'axios'

const baseUrl = '/api/persons'

const getAll = () => {
  return axios
    .get(baseUrl)
    .then(response => response.data)
}

const create = (newPersonObject) => {
  return axios
    .post(baseUrl, newPersonObject)
    .then(response => response.data)
}

const remove = (id) => {
  return axios
    .delete(`${baseUrl}/${id}`)
    .then(response => response.data)
}

const update = (id, updatedPersonObject) => {
  return axios
    .put(`${baseUrl}/${id}`, updatedPersonObject)
    .then(response => response.data)
}

export default { getAll, create, remove, update }
