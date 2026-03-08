import { Card, CardBody, Input, Button } from "@heroui/react";
import { IconKey } from "@tabler/icons-react";
import ProfileCard from "../ProfileCard/ProfileCard";
import SideNav from "../SideNav/SideNav";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';


export default function Settings() {
  // const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { register, handleSubmit, formState, getValues } = useForm({
    defaultValues: {
      password: "",
      newPassword: ""
    }
  });

  const ChangePass = (formData) => {
    return axios.patch(
      `https://route-posts.routemisr.com/users/change-password`,
      formData,
      {
        headers: {
          Token: localStorage.getItem("token")
        }
      }
    );
  };


  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: ChangePass,
    onSuccess: () => {
      localStorage.removeItem("token");
      console.log("Password changed successfully");
      navigate('/login');
      swal("Password Changed successfully", "Please login again", "success")
    }
  });

  const HandleChangePass = (values) => {
    mutate(values);
  };

  return (
    <div className="flex p-5 gap-5">
      <div className="w-1/3 sticky top-5 self-start">
        <ProfileCard />
        <SideNav />
      </div>

      <section className="w-full">
        <Card className="rounded-2xl border border-slate-200 shadow-sm">
          <CardBody className="p-5 sm:p-6">
            <div className="mb-5 flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#e7f3ff] text-[#1877f2]">
                <IconKey size={18} />
              </span>
              <div>
                <h1 className="text-xl font-extrabold text-slate-900 sm:text-2xl">
                  Change Password
                </h1>
                <p className="text-sm text-slate-500">
                  Keep your account secure by using a strong password.
                </p>
              </div>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit(HandleChangePass)}>
              <div>
                <label className="mb-1.5 block text-sm font-bold text-slate-700">
                  Current password
                </label>
                <Input
                  type="password"
                  placeholder="Enter current password"
                  radius="lg"
                  variant="bordered"
                  {...register("password", {
                    required: 'Please Enter your Password',
                    pattern: { value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/ }
                  },)}
                />
                {formState.errors.password && formState.touchedFields.password && <p className='text-red-600 text-sm'>{formState.errors.password?.message}</p>}
                {isError && (
                  <p className="text-red-600 text-sm">
                    Current password is wrong, try again
                  </p>
                )}              </div>

              <div>
                <label className="mb-1.5 block text-sm font-bold text-slate-700">
                  New password
                </label>
                <Input
                  type="password"
                  placeholder="Enter new password"
                  radius="lg"
                  variant="bordered"
                  {...register("newPassword", {
                    required: 'Please Enter your Password',
                    pattern: { value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, message: "Password must At least 8 characters with uppercase, lowercase, number, and special character." }
                  },)}
                />
                {formState.errors.newPassword && formState.touchedFields.newPassword ? (
                  <p className="text-red-600 text-sm">
                    {formState.errors.newPassword?.message}
                  </p>
                ) : (
                  <p className="text-sm text-gray-500">
                    At least 8 characters with uppercase, lowercase, number, and special character.
                  </p>
                )}
              </div>

              <Button type="submit" color="primary" className="w-full font-bold" isLoading={isPending}>
                Update password
              </Button>
            </form>
          </CardBody>
        </Card>
      </section>
    </div>
  );
}