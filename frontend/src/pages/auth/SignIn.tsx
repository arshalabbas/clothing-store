import { Link } from "react-router";
import TextInput from "../../components/form/TextInput";
import { useForm } from "react-hook-form";
import { signInSchema, SignInSchema } from "../../lib/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchema>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = (values: SignInSchema) => {
    // TODO: Submit form
    console.log(values);
  };
  return (
    <div className="flex h-screen min-h-screen w-full">
      <main className="flex h-full flex-1 items-center px-10">
        <div className="flex w-full flex-col gap-5">
          <div>
            <h2 className="text-4xl font-bold">Sign In</h2>
            <p className="mt-3 font-semibold">
              Login to <span className="text-primary">Haute</span>
            </p>
          </div>
          <form
            className="flex flex-col gap-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="w-full">
              <TextInput
                label="Email"
                placeholder="johndoe@mail.com"
                type="email"
                error={errors.email?.message}
                {...register("email")}
              />
            </div>
            <div className="w-full">
              <TextInput
                label="Password"
                placeholder="*********"
                type="password"
                error={errors.password?.message}
                {...register("password")}
              />
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
              <button className="btn btn-primary btn-wide">Log In</button>
              <span>
                Create new account?{" "}
                <Link to="/signup" className="underline">
                  Sign Up
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
    </div>
  );
};

export default SignIn;
