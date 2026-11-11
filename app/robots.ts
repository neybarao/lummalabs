import type { MetadataRoute } from "next";
import { SITE_URL } from "./content";

export const dynamic = "force-static";

// Buscadores e agentes de IA liberados de forma explícita. O "*" já libera todos;
// listar os principais deixa a intenção clara e evita bloqueio por regra padrão de terceiros.
const AI_AGENTS = [
  "Googlebot",
  "Bingbot",
  "Google-Extended",
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Applebot",
  "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: AI_AGENTS, allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
