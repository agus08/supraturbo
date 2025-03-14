import type { Config } from "tailwindcss"
import sharedConfig from "@repo/config-tailwind"

const config: Pick<Config, "prefix" | "presets" | "content" | "plugins"> = {
  content: ["./src/**/*.tsx"],
  presets: [sharedConfig],
  plugins: [require("daisyui")({
    themes: 'night --default',
  })],
}

export default config