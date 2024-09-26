import shuffle from 'just-shuffle'

export function doDraw(names: string[]) {
  const totalNamesList = names.length
  const scrambledListNames = shuffle(names)
  const result = new Map<string, string>()

  for (let index = 0; index < totalNamesList; index++) {
    const nameIndex = index === totalNamesList - 1 ? 0 : index + 1
    result.set(scrambledListNames[index], scrambledListNames[nameIndex])
  }

  return result
}
