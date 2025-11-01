export const ColorConfiguration = () => {
  return (
    <>
      <h3 className=" text-xl font-semibold mt-8 text-black">Colors</h3>
      <div className="p-6 rounded-md border mt-4 border-dark_border/60">
        <p className="text-base font-medium text-muted/60">
          <span className="font-semibold text-lg text-black">
            Centralized Color System
          </span>{" "}
          <br />
          All colors are centralized in <span className="font-semibold">src/app/globals.css</span>. 
          Change colors here and they will apply throughout the entire website.
        </p>
        <div className="py-4 px-5 rounded-md bg-dark_grey mt-8">
          <p className="text-sm text-black/60 flex flex-col gap-2">
            <span className="font-semibold text-base text-black mb-2">Primary Colors:</span>
            <span>--color-primary: #2D4363</span>
            <span>--color-purple: #1e013a</span>
            <span>--color-grey: #f4f5f6</span>
            <span>--color-border: #dbdbdb</span>
            <span>--color-darkmode: #00224a</span>
            <span>--color-deep-slate: #2D4363</span>
          </p>
        </div>
        <div className="py-4 px-5 rounded-md bg-dark_grey mt-4">
          <p className="text-sm text-black/60 flex flex-col gap-2">
            <span className="font-semibold text-base text-black mb-2">Extended Colors:</span>
            <span>--color-light-teal: #D6FFEB</span>
            <span>--color-light-blue-bg: #F4F7FF</span>
            <span>--color-dark-blue: #102C46</span>
            <span>--color-blue-primary: #3758F9</span>
            <span>--color-blue-secondary: #3056D3</span>
          </p>
        </div>
        <div className="py-4 px-5 rounded-md bg-dark_grey mt-4">
          <p className="text-sm text-black/60 flex flex-col gap-2">
            <span className="font-semibold text-base text-black mb-2">Google Brand Colors:</span>
            <span>--color-google-blue: #4285F4</span>
            <span>--color-google-green: #34A853</span>
            <span>--color-google-yellow: #FBBC05</span>
            <span>--color-google-red: #EB4335</span>
          </p>
        </div>
        <div className="py-4 px-5 rounded-md bg-dark_grey mt-4">
          <p className="text-sm text-black/60 flex flex-col gap-2">
            <span className="font-semibold text-base text-black mb-2">Service Gradient Colors:</span>
            <span>--color-gradient-pink: #ec4899</span>
            <span>--color-gradient-purple-1: #8b5cf6</span>
            <span>--color-gradient-purple-2: #7C3AED</span>
            <span>--color-gradient-purple-3: #C084FC</span>
            <span>--color-gradient-purple-4: #9333EA</span>
            <span>--color-gradient-indigo: #6366f1</span>
          </p>
        </div>
        <div className="py-4 px-5 rounded-md bg-dark_grey mt-4">
          <p className="text-sm text-black/60 flex flex-col gap-2">
            <span className="font-semibold text-base text-black mb-2">Common UI Colors:</span>
            <span>--color-white: #ffffff</span>
            <span>--color-black: #000000</span>
            <span>--color-gray-50 through --color-gray-900</span>
          </p>
        </div>
        <div className="mt-4 p-4 bg-[var(--color-blue-50)] rounded-md">
          <p className="text-sm text-black font-semibold">
            📝 Note: All colors are defined in the @theme section of globals.css. 
            To change any color across the entire website, simply update the value in globals.css.
          </p>
        </div>
      </div>
    </>
  );
};
