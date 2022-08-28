import blog from "../blog.tsx";

blog({
  author: "Luanlops",
  title: "Orion Blog",
  lang: "pt-br",
  theme: "light",
  description: "Blog pessoal para divulgar artigos e projetos.",
  avatar: "./assets/crash.jpg",
  favicon: './assets/galaxy.png',
  avatarClass: "rounded-full",
  links: [
    { title: "Email", url: "mailto:luanlopsmaia@gmail.com" },
    { title: "GitHub", url: "https://github.com/luanlops" },
  ],
});
