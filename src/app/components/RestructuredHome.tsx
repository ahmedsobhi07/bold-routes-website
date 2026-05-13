import Home from "../../imports/Home/Home";
import Responsive from "../../imports/Responsive/Responsive";

export default function RestructuredHome() {
  return (
    <div className="bg-white w-full">
      <div className="hidden md:block">
        <Home />
      </div>
      <div className="block md:hidden">
        <div className="mx-auto w-[375px] max-w-full overflow-hidden">
          <Responsive />
        </div>
      </div>
    </div>
  );
}
