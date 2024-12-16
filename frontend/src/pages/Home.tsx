import { useAuth } from "../store/useAuthStore";

const Home = () => {
  const clearToken = useAuth((state) => state.clearToken);
  return (
    <div className="text-2xl text-purple-500">
      Home
      <button className="btn btn-error" onClick={clearToken}>
        Log out
      </button>
    </div>
  );
};

export default Home;
