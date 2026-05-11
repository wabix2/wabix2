import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/portfolio/Portfolio";

export const Route = createFileRoute("/")({
  component: Portfolio,
  head: () => ({
    meta: [
      { title: "Wabi Tafese — Student Developer & Researcher" },
      {
        name: "description",
        content:
          "Portfolio of Wabi Tafese — student developer building AI systems, scientific simulations, and exploring cybersecurity through real projects.",
      },
      { property: "og:title", content: "Wabi Tafese — Student Developer & Researcher" },
      {
        property: "og:description",
        content: "Projects, research, and learning journey of a student developer.",
      },
    ],
  }),
});
