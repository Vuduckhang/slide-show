const checkClientSide = () => {
  return typeof window !== 'undefined'
}

const checkShowNavBar = (route) => {
  switch (route) {
    case '/profile':
      return true
    default:
      return false
  }
}

export { checkClientSide, checkShowNavBar }
