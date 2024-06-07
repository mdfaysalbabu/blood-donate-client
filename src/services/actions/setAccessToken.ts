"use server";

import { authKey } from "@/constant/authKey";
import { cookies } from "next/headers";

const setAccessToken = (token: string, option?: any) => {
  cookies().set(authKey, token);
};

export default setAccessToken;
