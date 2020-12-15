export interface User {
  firstName: string,
  lastName: string,
  email: string,
  address?: {
    street?: string,
    city?: string,
    province?: string
  },
  isActive?: boolean,
  registered?: any,
  hide?: boolean
}