export const getSessionStorageItem = (key: string) => {
  if (sessionStorage.getItem(key) == null) {
    return null
  }

  return JSON.parse(sessionStorage.getItem(key) as string)
}

export const setSessionStorageItem = (key: string, value: unknown) => {
  sessionStorage.setItem(key, JSON.stringify(value))
}
