import axios from 'axios'

const url = 'http://localhost:3001/events'

export const getAllEvents = async () => axios.get(url)

export const getEventById = async (id) => axios.get(`${url}/${id}`)

export const addEvent = async (event) => axios.post(url, event)

export const editEvent = async (id, event) => axios.put(`${url}/${id}`, event)

export const deleteEvent = async (id) => axios.delete(`${url}/${id}`)
