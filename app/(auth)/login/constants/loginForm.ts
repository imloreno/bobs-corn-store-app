import type { IconName } from "@/app/ui/components/Icon";

export type LoginField = {
  name: string;
  placeholder: string;
  icon?: IconName;
  type?: string;
  defaultValue?: any;
  validation?: {
    required?: boolean | string;
    minLength?: number | { value: number; message?: string };
    maxLength?: number | { value: number; message?: string };
    pattern?: RegExp | { value: RegExp; message?: string };
  };
};

export const LOGIN_FIELDS: LoginField[] = [
  {
    name: "username",
    placeholder: "Username",
    icon: "USERNAME",
    type: "text",
    defaultValue: "",
    validation: {
      required: "Username is required",
      minLength: {
        value: 3,
        message: "Username must be at least 3 characters",
      },
    },
  },
  {
    name: "password",
    placeholder: "Enter password",
    icon: "PASSWORD",
    type: "password",
    defaultValue: "",
    validation: {
      required: "Password is required",
      minLength: {
        value: 6,
        message: "Password must be at least 6 characters",
      },
    },
  },
];

export const LOGIN_DEFAULT_VALUES = LOGIN_FIELDS.reduce((acc, f) => {
  acc[f.name] = f.defaultValue ?? "";
  return acc;
}, {} as Record<string, any>);

export default LOGIN_FIELDS;
