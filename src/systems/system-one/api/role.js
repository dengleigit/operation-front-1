export const getRoutes = () => {
  return Promise.resolve({
    data: {
      data: [{ path: '/login', component: 'login', hidden: true }]
    }
  })
}
