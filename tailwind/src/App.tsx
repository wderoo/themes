import "./App.css";
import { HoleBackground } from "./components/animate-ui/backgrounds/hole";
import { ProductForm } from "./components/ProductForm";

function App() {
  return (
    <>
      <div className=" flex w-full flex-col bg-black">
        <HoleBackground className="flex w-full items-end bg-black px-10 pt-26 pb-4">
          <ProductForm />
          <div className="absolute inset-0 z-0 overflow-hidden bg-black" />
        </HoleBackground>
      </div>
      <h4>Asteroid</h4>
    </>
  );
}

export default App;
