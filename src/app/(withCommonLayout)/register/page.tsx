"use client";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaInfoCircle, FaBirthdayCake, FaHandHoldingHeart, FaTint, FaLock, FaLockOpen, FaClock } from "react-icons/fa";
import DBDatePicker from "@/components/Forms/DBDatePicker";
import DBForm from "@/components/Forms/DBForm";
import DBInput from "@/components/Forms/DBInput";
import DBSelectField from "@/components/Forms/DBSelectField";
import { registerUser } from "@/services/actions/registerUser";
import { userLogin } from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/auth.services";
import { dateFormatter } from "@/utils/dateFormatter";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const userValidationSchema = z
  .object({
    name: z.string().min(1, "Please enter your name!"),
    email: z.string().email("Please enter a valid email address!"),
    phone: z.string().regex(/^\d{11}$/, "Please provide a valid phone number!"),
    location: z.string().min(1, "Please enter your address!"),
    bloodType: z.string().min(1, "Please enter your blood type!"),
    bio: z.string(),
    age: z.preprocess(
      (x) => (x ? x : undefined),
      z.coerce.number().int().optional()
    ),
    lastDonationDate: z.preprocess(
      (x) => (x ? x : undefined),
      z.date().refine((date) => date instanceof Date, {
        message: "Invalid date format",
      })
    ),
    isDonateBlood: z.string().transform((val) => val === "Yes"),
    password: z.string().min(6, "Must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords must match",
  });

const defaultValues = {
  name: "",
  email: "",
  phone: "",
  location: "",
  bloodType: "",
  bio: "",
  age: 0,
  lastDonationDate: "",
  isDonateBlood: "Yes",
  password: "",
  confirmPassword: "",
};

const RegisterPage = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleRegister = async (values: FieldValues) => {
    const { confirmPassword, ...formData } = values;

    formData.lastDonationDate = dateFormatter(formData.lastDonationDate);

    try {
      console.log(formData);

      const res = await registerUser(formData);
      console.log(res);

      if (res?.data?.id) {
        toast.success(res?.message);
        const result = await userLogin({
          password: values.password,
          email: values.email,
        });
        console.log({ result });

        if (result?.data?.accessToken) {
          storeUserInfo({ accessToken: result?.data?.accessToken });
          router.push("/dashboard");
        } else {
          setError(res.message);
        }
      }
    } catch (err: any) {
      console.error(err.message);
      setError(err.message);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-pink-100 p-8">
    <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg p-8 text-center">
      <h1 className="text-3xl font-semibold text-teal-700 mb-6">
        Register To Donate Blood
      </h1>
      {error && (
        <div className="bg-red-500 text-white p-2 rounded mb-4">{error}</div>
      )}

      <DBForm
        onSubmit={handleRegister}
        resolver={zodResolver(userValidationSchema)}
        defaultValues={defaultValues}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div className="flex items-center gap-2">
            <FaUser className="text-teal-700" />
            <DBInput
              name="name"
              label="Name"
              type="text"
              fullWidth={true}
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-teal-700" />
            <DBInput
              name="email"
              label="Email"
              type="email"
              fullWidth={true}
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex items-center gap-2">
            <FaPhone className="text-teal-700" />
            <DBInput
              name="phone"
              label="Phone"
              type="text"
              fullWidth={true}
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-teal-700" />
            <DBInput
              name="location"
              label="Location"
              type="text"
              fullWidth={true}
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex items-center gap-2">
            <FaInfoCircle className="text-teal-700" />
            <DBInput
              name="bio"
              label="Bio"
              type="text"
              fullWidth={true}
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex items-center gap-2">
            <FaBirthdayCake className="text-teal-700" />
            <DBInput
              name="age"
              label="Age"
              type="number"
              fullWidth={true}
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex items-center gap-2">
            <FaHandHoldingHeart className="text-teal-700" />
            <DBSelectField
              items={["Yes", "No"]}
              name="isDonateBlood"
              label="Want To Donate Blood?"
            />
          </div>
          <div className="flex items-center gap-2">
            <FaTint className="text-teal-700" />
            <DBSelectField
              items={[
                "A Positive",
                "A Negative",
                "B Positive",
                "B Negative",
                "AB Positive",
                "AB Negative",
                "O Positive",
                "O Negative",
              ]}
              name="bloodType"
              label="Select Your Blood Type"
            />
          </div>
          <div className="flex items-center gap-2">
            <FaClock className="text-teal-700" />
            <DBDatePicker
              name="lastDonationDate"
              label="Last Donation Date"
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex items-center gap-2">
            <FaLock className="text-teal-700" />
            <DBInput
              name="password"
              label="Password"
              type="password"
              fullWidth={true}
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex items-center gap-2">
            <FaLockOpen className="text-teal-700" />
            <DBInput
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              fullWidth={true}
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <p className="text-right mb-4 text-sm">
          <Link href="/change-password" className="link text-teal-500">
            Want to change password?
          </Link>
        </p>
        <button
          type="submit"
          className="btn bg-teal-700 w-full mb-4 text-white font-bold"
        >
          Register
        </button>
        <p className="text-sm">
           have an account?{" "}
          <Link href="/login" className="link text-teal-500">
            Login
          </Link>
        </p>
      </DBForm>
    </div>
  </div>
  );
};

export default RegisterPage;
