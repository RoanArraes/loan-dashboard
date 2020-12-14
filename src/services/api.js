import { USER } from '../utils'

export const getUser = async () => {
    return new Promise(resolve => setTimeout(() => {
        resolve(USER)
    }, 2000))
}