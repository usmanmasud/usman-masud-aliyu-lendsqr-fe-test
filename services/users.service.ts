import axios from "axios";
import { User } from "@/types/user";

const API_URL = "https://mocki.io/v1/dd530b0e-ab21-4954-be9c-1ded3812e74e";

export const fetchUsers = async (): Promise<User[]> => {
  const res = await axios.get(API_URL);
  return res.data;
};
