import { baseInstance } from "../Api/AxiosInstance";
import type { Character } from "../Types/Character";

const RESOURCE = "rickandmorty";

export const getCharacters = async (): Promise<Character[]> => {
  const { data } = await baseInstance.get<Character[]>(RESOURCE);
  return data;
};

export const getCharacterById = async (id: number): Promise<Character> => {
  const { data } = await baseInstance.get<Character>(`${RESOURCE}/${id}`);
  return data;
};

export const createCharacter = async (
  payload: Omit<Character, "id">,
): Promise<Character> => {
  const { data } = await baseInstance.post<Character>(RESOURCE, payload);
  return data;
};

export const updateCharacter = async (
  id: number,
  payload: Omit<Character, "id">,
): Promise<Character> => {
  const { data } = await baseInstance.patch<Character>(
    `${RESOURCE}/${id}`,
    payload,
  );
  return data;
};

export const deleteCharacter = async (id: number): Promise<void> => {
  await baseInstance.delete(`${RESOURCE}/${id}`);
};
