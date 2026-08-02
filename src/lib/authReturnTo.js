export function getReturnTo() {
  const params = new URLSearchParams(window.location.search)
  return params.get('returnTo') || '/dashboard'
}

export function setReturnTo(path) {
  // helper if needed
}
