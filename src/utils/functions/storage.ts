// 필요 없을 시에 추후 삭제
// export enum STORAGE_KEYS {
//   MODU_MEMU_USER_POSITION = "MODU_MEMU_USER_POSITION",
// }

export const getSessionStorageItem = (key: string) => {
  if (sessionStorage.getItem(key) == null) {
    return null
  }

  return JSON.parse(sessionStorage.getItem(key) as string)
}

export const setSessionStorageItem = (key: string, value: unknown) => {
  sessionStorage.setItem(key, JSON.stringify(value))
}
