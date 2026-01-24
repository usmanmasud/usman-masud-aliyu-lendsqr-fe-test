import axios from "axios";
import { User } from "@/types/user";

const API_URL = "https://mocki.io/v1/f3863e42-8d2e-4483-924c-a780fca3a158";

export const fetchUsers = async (): Promise<User[]> => {
  const res = await axios.get(API_URL);
  return res.data;
};
