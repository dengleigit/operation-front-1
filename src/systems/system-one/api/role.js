export const getRoles = () => {
  return Promise.resolve({
    data: {
      roles: ['admin']
    }
  })
}

export const login = (data) => {
  return Promise.resolve({
    data: {
      isSuccess: true,
      token: '123456'
    }
  })
}
