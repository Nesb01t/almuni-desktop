import { useAuthStore } from "@/store/auth";
import axios from "axios";

export const useHttp = () => {
  const authStore = useAuthStore();

  const get = async (url: string) => {
    const res = await axios(url, {
      headers: {
        ...authStore.authHeader()
      }
    });
    return res.data;
  };

  const post = async (url: string, data: any) => {
    const res = await axios(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...authStore.authHeader()
      },
      data
    });
    return res.data;
  };

  return {
    get,
    post
  };
};