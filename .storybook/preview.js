import React from "react";
import { GlobalStyle } from "../src/shared/global";

export const decorators = [
  Story => (
    <>
    {/* Wrapping all stories with the global style */}
      <GlobalStyle/>
      <Story/>
    </>
  )
]
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}