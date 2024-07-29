"use client";
import { IoEyeOutline } from "react-icons/io5";
import { ButtonPurple } from "./utilityComponents/Buttons";
import { useEffect, useState } from "react";
import RegistrationForm from "./RegistrationForm";
import { useForm } from "react-hook-form";

export default function Test() {
  const [isLogin, setIsLogin] = useState(false);
  const [student, setStudent] = useState([])


  useEffect(() => {
    fetch("/api/students")
      .then((response) => response.json())
      .then((student) => {

        setStudent(student);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const currentUser = students.find(
      (student)=> student.email === data.email && student.password === data.password
    )
      if (currentUser){
        
      }
  }
  const password = watch('password', ''); //watch function provides a way to react to changes in the form field value.

  return (
    <div className="">
      {isLogin ? (
        <div
          id="form-page"
          className="h-screen-minus-navbar px-4 py-16 sm:px-6 lg:px-8"
        >
          <main>
            <div className="mx-auto max-w-lg text-center">
              <h1 className="text-2xl font-bold sm:text-3xl">Welcome Back!</h1>
              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                libero nulla eaque error neque ipsa culpa autem, at itaque
                nostrum!
              </p>
            </div>

            <form
              className="mx-auto mb-0 mt-8 max-w-md space-y-4"
              action="#"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <label className="sr-only" htmlFor="email">
                  Email
                </label>
                <div className="">
                  <input
                    placeholder="Enter your email"
                    className="w-full rounded-lg border-gray-300 p-4 pe-12 text-sm shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-400"
                    id="email"
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,  //Regular expressions (regex) are special text patterns used to match specific sequences of characters.
                        message: "Enter a valid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="sr-only" htmlFor="password">
                  Password
                </label>
                <div className="relative">
                  <input
                    placeholder="Enter your password"
                    className="w-full rounded-lg border-gray-300 p-4 pe-12 text-sm shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-400"
                    id="password"
                    type="password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                      },
                    })}
                  />
                  <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <IoEyeOutline className="h-6 w-6 text-gray-400" />
                  </span>
                </div>
                {errors.password && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">
                  No account yet? &nbsp;
                  <span
                    onClick={() => setIsLogin(false)}
                    className="font-bold underline hover:cursor-pointer hover:text-gray-800"
                  >
                    Create one
                  </span>
                </p>
                <ButtonPurple type="submit" className="">
                  Sign in
                </ButtonPurple>
              </div>
            </form>
          </main>
        </div>
      ) : (
        <div>
          <RegistrationForm setIsLogin={setIsLogin} />
        </div>
      )}
    </div>
  );
}
