import { strapiConfig } from "@/lib/strapi/config";
import { getFeaturedArticles } from "@/lib/strapi/services/article";
import { formatDate } from "@/lib/utils";
import Image from "next/image";

export default async function ArticlesSection() {
  const { data: articles } = await getFeaturedArticles();

  return (
    <section style={{ backgroundColor: "#ffffff", padding: "7rem 0" }}>
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div style={{ marginBottom: "4rem" }}>
          <span
            style={{
              display: "block",
              fontFamily: "var(--font-family-ui)",
              fontSize: "0.65rem",
              fontWeight: 600,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#D4AF37",
              marginBottom: "1rem",
            }}
          >
            Acervo · Publicações
          </span>
          <div
            style={{
              width: "3rem",
              height: "1px",
              backgroundColor: "#D4AF37",
              marginBottom: "1.25rem",
            }}
          />
          <h2
            style={{
              fontFamily: "var(--font-family-display)",
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              fontWeight: 300,
              color: "#1a1a1a",
              letterSpacing: "0.01em",
              lineHeight: 1.1,
            }}
          >
            Artigos em Destaque
          </h2>
        </div>

        {articles.length === 0 && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "6rem 0",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-family-ui)",
                fontSize: "0.8rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#9a9288",
              }}
            >
              Nenhum artigo disponível de momento.
            </p>
          </div>
        )}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {articles.map((article) => (
            <article
              key={article.id}
              className="article-card"
              style={{
                borderTop: "2px solid rgba(212,175,55,0.35)",
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
                borderRadius: "0.125rem",
                overflow: "hidden",
              }}
            >
              {/* Image */}
              <div style={{ height: 220, overflow: "hidden", position: "relative" }}>
                <Image
                  width={article.highlightedImage.formats.medium?.width ?? 600}
                  height={article.highlightedImage.formats.medium?.height ?? 400}
                  src={`${strapiConfig.baseUrl}${article.highlightedImage.url}`}
                  alt={article.title}
                  className="article-img"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>

              {/* Content */}
              <div style={{ padding: "1.75rem", flex: 1, display: "flex", flexDirection: "column" }}>
                <time
                  style={{
                    fontFamily: "var(--font-family-ui)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#D4AF37",
                    display: "block",
                    marginBottom: "0.75rem",
                  }}
                >
                  {formatDate(new Date(article.publishedAt))}
                </time>

                <h3
                  style={{
                    fontFamily: "var(--font-family-display)",
                    fontSize: "1.4rem",
                    fontWeight: 500,
                    color: "#1a1a1a",
                    lineHeight: 1.2,
                    marginBottom: "0.75rem",
                    flex: 1,
                  }}
                >
                  {article.title}
                </h3>

                <p
                  style={{
                    fontFamily: "var(--font-family-ui)",
                    fontSize: "0.82rem",
                    color: "#6b6560",
                    lineHeight: 1.7,
                    marginBottom: "1.25rem",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {article.description}
                </p>

                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <div
                    style={{
                      width: "1.5rem",
                      height: "1px",
                      backgroundColor: "#D4AF37",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-family-ui)",
                      fontSize: "0.65rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "#D4AF37",
                    }}
                  >
                    Ler Artigo
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
