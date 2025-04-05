import { MoonLoader } from "react-spinners";

function Loading() {
  return (
    <div className="flex justify-center">
      <MoonLoader color="#ff8200" loading size={60} speedMultiplier={0.5} />
    </div>
  );
}

export default Loading;
