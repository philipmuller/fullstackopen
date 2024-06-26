import axios from 'axios'
const baseUrl = '/api/persons'

const getAll = () => {
  return axios.get(baseUrl)
}

const create = newEntry => {
  return axios.post(baseUrl, newEntry)
}

const update = (id, newEntry) => {
  return axios.put(`${baseUrl}/${id}`, newEntry)
}

const deleteEntry = id => {
    return axios.delete(`${baseUrl}/${id}`)
}

export default { getAll, create, update, deleteEntry }