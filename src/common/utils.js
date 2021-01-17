export const countOccurrence = (string, character) => (string.match(new RegExp(character, 'g')) || []).length
