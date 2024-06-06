import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import dayjs from "dayjs";

interface ITimePicker {
  name: string;
  size?: "small" | "medium";
  placeholder?: string;
  label?: string;
  required?: boolean;
  fullWidth?: boolean;
}

const DBTimePicker = ({
  name,
  label,
  size = "small",
  required,
  fullWidth = true,
}: ITimePicker) => {
  const { control, formState } = useFormContext();
  const isError = formState.errors[name] !== undefined;

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={dayjs(new Date().toDateString())}
      render={({ field: { onChange, value, ...field } }) => (
        <div className={`form-control ${fullWidth ? "w-full" : "w-auto"}`}>
          {label && (
            <label className="label">
              <span className="label-text">{label}</span>
            </label>
          )}
          <TimePicker
            {...field}
            className={`input input-bordered ${
              size === "medium" ? "input-md" : "input-sm"
            } ${isError ? "input-error" : ""}`}
            value={value || new Date()}
            onChange={onChange}
            required={required}
            format="HH:mm"
          />
          {isError && (
            <span className="text-error text-sm">
              {formState.errors[name]?.message as string}
            </span>
          )}
        </div>
      )}
    />
  );
};

export default DBTimePicker;
