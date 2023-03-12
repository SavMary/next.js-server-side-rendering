export const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=886e5c53&t=';
export const BASE_URL = "https://mate.academy/students-api/users";

export async function getMovie(title: string) {
  const response = await fetch(`${API_URL}${title}`);

  return response.json();
}

export const getUsers = async () => {
  return (await fetch(`${BASE_URL}`)).json();
};