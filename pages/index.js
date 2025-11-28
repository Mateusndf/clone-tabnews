import React from "react";

function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "16px",
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
        <p style={{ fontSize: "1.125rem", maxWidth: "800px", color: "#666" }}>
          Uma plataforma colaborativa para estudantes e pesquisadores
          compartilharem conhecimento, debaterem ideias e evoluírem
          academicamente.
        </p>
      </div>
    </div>
  );
}

export default Home;
