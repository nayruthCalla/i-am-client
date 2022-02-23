/* eslint-disable import/prefer-default-export */
export const firtsLetter = (name) => {
  const separateName = name.split(' ')
  if (separateName.length > 1) {
    return `${separateName[0].charAt(0).toLocaleUpperCase()}${separateName[1]
      .charAt(0)
      .toLocaleUpperCase()}`
  }
  return separateName[0].charAt(0)
}
