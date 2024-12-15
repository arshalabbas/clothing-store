import { Link } from "react-router";
import TextInput from "../../components/form/TextInput";

const SignIn = () => {
  return (
    <div className="flex h-screen min-h-screen w-full">
      <main className="flex h-full flex-1 items-center px-10">
        <div className="flex w-full flex-col gap-5">
          <div>
            <h2 className="text-4xl font-bold">Sign In</h2>
            <p className="mt-3 font-semibold">
              Login to <span className="text-primary">PandaWears</span>
            </p>
          </div>
          <form className="flex flex-col gap-3">
            <div className="w-full">
              <TextInput
                label="Email"
                placeholder="johndoe@mail.com"
                type="email"
              />
            </div>
            <div className="w-full">
              <TextInput
                label="Password"
                placeholder="*********"
                type="password"
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
