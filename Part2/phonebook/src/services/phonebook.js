import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  return axios.get(baseUrl)
}

const create = newEntry => {
  return axios.post(baseUrl, newEntry)
}

const update = (id, newEntry) => {
  return axios.put(`${baseUrl}/${id}`, newEntry)
}

export default { getAll, create, update }