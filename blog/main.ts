import blog from "../blog.tsx";

blog({
  author: "Luanlops",
  title: "Orion Blog",
  lang: "pt-br",
  theme: "light",
  description: "Blog pessoal para divulgar artigos e projetos.",
  avatar: "https://deno-avatar.deno.dev/avatar/blog.svg",
  favicon: './assets/galaxy.png',
  avatarClass: "rounded-full",
  links: [
    { title: "Email", url: "mailto:luanlopsmaia@gmail.com" },
    { title: "GitHub", url: "https://github.com/luanlops" },
  ],
});
