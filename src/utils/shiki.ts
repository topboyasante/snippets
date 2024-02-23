import { bundledLanguages, getHighlighter } from "shiki/bundle/web";

export const codeToHtml = async ({ code, language }:{code:string,language:string}) => {
  const highlighter = await getHighlighter({
    themes: ["github-light", "github-dark","vitesse-dark"],
    langs: [...Object.keys(bundledLanguages)],
  });

  return highlighter.codeToHtml(code, {
    lang: language,
    themes: {
      dark: "vitesse-dark",
      light: "github-light",
    },
  });
};
