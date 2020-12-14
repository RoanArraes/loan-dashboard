import { USER_MOCK } from '../utils'

export const getUser = async () => {
    return new Promise(resolve => setTimeout(() => {
        resolve(USER_MOCK)
    }, 2000))
}