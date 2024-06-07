"use client";

import DBForm from "@/components/Forms/DBForm";
import DBInput from "@/components/Forms/DBInput";
import { useChangePasswordMutation } from "@/redux/api/authApi";
import { logoutUser } from "@/services/actions/logoutUser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const validationSchema = z
  .object({
    currentPassword: z.string().min(6, "Must be at least 6 characters long"),
    newPassword: z.string().min(6, "Must be at least 6 characters long"),
    confirmPassword: z.string().min(6, "Must be at least 6 characters"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords must match",
  });

const ChangePassword = () => {
  const [changePassword] = useChangePasswordMutation();
  const router = useRouter();
  const [error, setError] = useState("");
  const onSubmit = async (values: FieldValues) => {
    const { confirmPassword, ...formData } = values;
    try {
      const res = await changePassword(formData);

      if ("data" in res && res.data.status === 200) {
        logoutUser(router);
        toast.success("Password Changed Successfully");
      } else {
        throw new Error("Incorrect Old Password");
      }
    } catch (error: any) {
      toast.success("Incorrect Old Password");
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-pink-100 p-8">
      <div className="max-w-2xl w-full bg-white shadow-md rounded-md p-8 text-center">
        <h1 className="text-3xl font-semi text-red-700 bg-white mb-4">
          Change Password
        </h1>
        {error && (
          <div className="bg-red-500 text-white p-2 rounded mb-4">{error}</div>
        )}

        <DBForm
          onSubmit={onSubmit}
          defaultValues={{ oldPassword: "", newPassword: "" }}
          resolver={zodResolver(validationSchema)}
        >
          <div className="grid grid-cols-1 gap-4 mb-4">
            <div>
              <DBInput
                name="currentPassword"
                label="Current Password"
                type="password"
                fullWidth={true}
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <DBInput
                name="newPassword"
                label="New Password"
                type="password"
                fullWidth={true}
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <DBInput
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                fullWidth={true}
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <button
            type="submit"
            className="btn bg-red-700 w-full mb-4 text-white font-bold"
          >
            Change Password
          </button>
        </DBForm>
      </div>
    </div>
  );
};

export default ChangePassword;
