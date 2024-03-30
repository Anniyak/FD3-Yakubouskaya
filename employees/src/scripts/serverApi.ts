import { POST, DELETE, PUT } from './constants.ts'
import {Config} from '../scripts/types.ts'

export const setData = async (method, payload, endpoint ) => {
  let config:Config= {}

  if (method) {
    config = {
      method,
      headers: {
        'Content-Type': 'application/json'
      }
    }

    if (method === POST || method === PUT) {
      config.body = JSON.stringify(payload.body)
    }

    if (method === DELETE || method === PUT) {
      endpoint = `${endpoint}/${payload.id}`
    }
  }

  try {
    const response = await fetch(endpoint, config)
    if (response.ok) {
      let message
      switch (method) {
        case POST: {
          message = 'Data has been added'
          break
        }
        case DELETE: {
          message = 'Data has been removed'
          break
        }
        case PUT: {
          message = 'Data has been updated'
          break
        }
        default: {
          message = 'Data has been received'
        }
      }
      console.log(message)

      const result = await response.json()
      return result
    }
    throw new Error(response.statusText)
  } catch (err) {
    console.error(err.message || err)
  }
}
export const getData=async  (query, endpoint)=> {
  try {
    // Определяем наличие строки запроса
    query ? (query = `?${query}`) : (query = '')

    const response = await fetch(`${endpoint}${query}`)

    if (!response.ok) throw new Error(response.statusText)

    const json = await response.json()
    console.log(json)
    return json
  } catch (err) {
    console.error(err.message || err)
  }
}