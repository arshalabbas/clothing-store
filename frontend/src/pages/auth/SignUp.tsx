import { Link } from "react-router";
import TextInput from "../../components/form/TextInput";
import { useForm } from "react-hook-form";
import { signUpSchema, SignUpSchema } from "../../lib/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { signUpUser } from "../../lib/api/auth.api";
import { useAuth } from "../../store/useAuthStore";
import Loading from "../../components/misc/Loading";

const SignUp = () => {
  const setToken = useAuth((state) => state.setToken);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchema>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(signUpSchema),
  });

  const signUpMutation = useMutation({
    mutationFn: signUpUser,
  });

  const onSubmit = (values: SignUpSchema) => {
    signUpMutation.mutate(
      {
        email: values.email,
        firstName: values.firstName,
        lastName: values.lastName,
        password: values.password,
      },
      {
        onSuccess: (data) => {
          setToken(data.token);
        },
        onError: (error) => {
          // alert("An error occured" + error.respose.data.message);
          console.log("ERROR", error.response.data);
        },
      },
    );
  };

  return (
    <div className="flex h-screen min-h-screen w-full">
      <main className="flex h-full flex-1 items-center px-10">
        <div className="flex w-full flex-col gap-5">
          <div>
            <h2 className="text-4xl font-bold">Sign Up</h2>
            <p className="mt-3 font-semibold">
              Welcome to <span className="text-primary">Haute</span>
            </p>
          </div>
          <form
            className="flex flex-col gap-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex w-full flex-wrap gap-x-2">
              <div className="flex-1">
                <TextInput
                  label="First Name"
                  placeholder="John"
                  type="text"
                  error={errors.firstName?.message}
                  {...register("firstName")}
                />
              </div>
              <div className="flex-1">
                <TextInput
                  label="Last Name"
                  placeholder="Doe"
                  type="text"
                  error={errors.lastName?.message}
                  {...register("lastName")}
                />
              </div>
            </div>
            <div className="w-full">
              <TextInput
                label="Email"
                placeholder="johndoe@mail.com"
                type="email"
                error={errors.email?.message}
                {...register("email")}
              />
            </div>
            <div className="flex w-full flex-wrap gap-x-2">
              <div className="flex-1">
                <TextInput
                  label="Password"
                  placeholder="*********"
                  type="password"
                  error={errors.password?.message}
                  {...register("password")}
                />
              </div>
              <div className="flex-1">
                <TextInput
                  label="Confirm Password"
                  placeholder="*********"
                  type="password"
                  error={errors.confirmPassword?.message}
                  {...register("confirmPassword")}
                />
              </div>
            </div>
            <span className="my-5 text-sm">
              By creating an account, you agree to our{" "}
              <a href="#" className="text-primary underline">
                terms and conditions
              </a>{" "}
              and{" "}
              <a href="#" className="text-primary underline">
                privacy policy
              </a>
              .
            </span>
            <div className="flex items-center gap-5">
              <button className="btn btn-primary btn-wide">
                Create new Account
              </button>
              <span>
                Already have an account?{" "}
                <Link to="/signin" className="underline">
                  Login
                </Link>
              </span>
            </div>
          </form>
        </div>
      </main>
      <section className="h-full flex-1">
        <img
          src="/auth-banner.jpg"
          alt="Auth banner image"
          className="h-full w-full object-cover object-center"
        />
      </section>
      <Loading isLoading={signUpMutation.isPending} />
    </div>
  );
};

export default SignUp;
