"use server";

export const registerUser = async (formData: FormData) => {
  const res = await fetch("http://localhost:5000/api/register", {
    method: "POST",
    body: formData,
    cache: "no-store",
  });

  const userInfo = await res.json();
  return userInfo;
};
