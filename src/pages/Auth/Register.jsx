import React from "react";
import authImg from "../../assets/authImage.png";
import Logo from "../../components/Shared/Logo";
import { Link } from "react-router";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";

const Register = () => {
  const { createUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <Logo></Logo>
      <div className="flex min-h-screen w-full">
        {/* left side */}
        <div className="w-1/2 flex flex-col justify-center items-center">
          <div>
            <h1 className="text-4xl font-bold">Create an Account</h1>
            <p>Register With zap shift</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="fieldset w-lg px-5">
              <label className="label">Email</label>
              <input
                type="email"
                className="input w-full"
                placeholder="Email"
                {...register("email", { required: true })}
              />

              <label className="label">Password</label>
              <input
                type="password"
                className="input w-full"
                placeholder="Password"
                {...register("password", { required: true, minLength: 8 })}
              />
              {errors.password?.type === "required" && (
                <p>password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <P>password must be 8 character or longer</P>
              )}

              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>

              <button className="btn btn-primary text-black mt-4">
                Register
              </button>
              <div>
                <p className="text-lg">
                  Already Have an account?{" "}
                  <Link
                    to={"/signIn"}
                    className="link link-hover text-[#8FA748]"
                  >
                    Register
                  </Link>
                </p>
              </div>
              <div className="text-center">
                <h1 className="text-xl py-2 text-accent">OR</h1>
                <button className="btn w-full bg-white text-black border-[#e5e5e5]">
                  <svg
                    aria-label="Google logo"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <path d="m0 0H512V512H0" fill="#fff"></path>
                      <path
                        fill="#34a853"
                        d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                      ></path>
                      <path
                        fill="#4285f4"
                        d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                      ></path>
                      <path
                        fill="#fbbc02"
                        d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                      ></path>
                      <path
                        fill="#ea4335"
                        d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                      ></path>
                    </g>
                  </svg>
                  Login with Google
                </button>
              </div>
            </fieldset>
          </form>
        </div>
        {/* right side */}
        <div className="bg-[#FAFDF0] w-1/2 flex flex-col justify-center items-center">
          <img className="my-auto mx-auto" src={authImg} alt="auth-image" />
        </div>
      </div>
    </div>
  );
};

export default Register;
