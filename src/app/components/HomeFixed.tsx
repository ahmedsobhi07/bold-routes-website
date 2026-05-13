import Home from "../../imports/Home/Home";

export default function HomeFixed() {
  return (
    <div className="bg-white w-full min-h-screen">
      <style>{`
        /* Fix the layout container */
        [data-name="Home"] {
          min-height: 100vh !important;
          height: auto !important;
          position: relative !important;
          padding-bottom: 350px;
        }

        /* Fix the footer positioning */
        [data-name="Footer"] {
          position: absolute !important;
          top: auto !important;
          bottom: 0 !important;
          left: 0 !important;
          right: 0 !important;
          width: 100% !important;
          max-width: 1440px !important;
          margin: 0 auto !important;
        }

        /* Ensure main content flows properly */
        [data-name="Home"] > div:first-child {
          margin-bottom: 0 !important;
        }
      `}</style>
      <Home />
    </div>
  );
}
