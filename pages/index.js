import React from "react";

function Home() {
  const githubUser = "Mateusndf";
  const githubRepo = "cognews";

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "16px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div>
        <h1
          style={{
            fontSize: "2.25rem",
            fontWeight: "bold",
            marginBottom: "16px",
          }}
        >
          🚧 Em construção
        </h1>
        <p
          style={{
            fontSize: "1.125rem",
            maxWidth: "800px",
            color: "#666",
            marginBottom: "32px",
          }}
        >
          Uma plataforma colaborativa para estudantes e pesquisadores
          compartilharem conhecimento, debaterem ideias e evoluírem
          academicamente.
        </p>

        <a
          href={`https://github.com/${githubUser}/${githubRepo}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            textDecoration: "none",
            backgroundColor: "#f3f4f6",
            color: "#333",
            padding: "8px 16px",
            borderRadius: "9999px",
            border: "1px solid #e5e7eb",
            transition: "background-color 0.2s",
            cursor: "pointer",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#e5e7eb")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#f3f4f6")
          }
        >
          <img
            src={`https://github.com/${githubUser}.png`}
            alt="Avatar do autor"
            style={{
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              marginRight: "8px",
            }}
          />
          <span style={{ fontSize: "0.875rem", fontWeight: "600" }}>
            Ver projeto no GitHub
          </span>
        </a>
      </div>
    </div>
  );
}

export default Home;
