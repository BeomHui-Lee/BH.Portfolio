// import "!tailwindcss/tailwind.css"
import "/src/app/globals.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  Story => (
    // className="relative m-auto max-w-xl flex-col"
    <div style={{ position: "relative", margin: "auto", maxWidth: "568px" }}>
      <Story />
    </div>
  ),
];