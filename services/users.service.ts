import axios from "axios";
import { User } from "@/types/user";

const API_URL = "";

export const fetchUsers = async (): Promise<User[]> => {
  const res = await axios.get(API_URL);
  return res.data;
};
