import { useEffect, useState } from "react";
import Home from "../../imports/Home/Home";
import PropertyDetails from "../../imports/PropertyDetails/PropertyDetails";
import Responsive from "../../imports/Responsive/Responsive";

export default function RestructuredHome() {
  const [screen, setScreen] = useState<"home" | "propertyDetails">("home");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [screen]);

  if (screen === "propertyDetails") {
    return <PropertyDetails onHomeClick={() => setScreen("home")} />;
  }

  return (
    <div className="bg-white w-full">
      <div className="hidden md:block">
        <Home onUnitClick={() => setScreen("propertyDetails")} />
      </div>
      <div className="block md:hidden">
        <div className="mx-auto w-[375px] max-w-full overflow-hidden">
          <Responsive />
        </div>
      </div>
    </div>
  );
}
