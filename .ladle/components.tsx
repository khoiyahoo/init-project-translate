import i18n from "./i18next-ladle.config";
import { I18nextProvider } from "react-i18next";
import type { GlobalProvider } from "@ladle/react";
import "./global.css";
const FONT_MAPPING: Record<string, string> = {
  ja: "font-noto-sans",
  en: "font-inter",
};
