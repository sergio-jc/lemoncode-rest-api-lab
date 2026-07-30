export interface CharacterEntityVm {
  id: string;
  name: string;
  image: string;
  species: string;
  status: string;
  bestSentence?: string;
}

export const createEmptyCharacter = (): CharacterEntityVm => ({
  id: '',
  name: '',
  image: '',
  species: '',
  status: '',
  bestSentence: '',
});
