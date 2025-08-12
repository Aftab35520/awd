import React from "react";

const FontGeneratingLoader = ({ isLoading, onCancel }) => {
  if (!isLoading) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.loaderContainer}>
        <div style={styles.spinner}></div>
        <p style={styles.message}>Hand Tight Working on Generating your handwriting..</p>
        {onCancel && (
          <button style={styles.cancelButton} onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </div>
  );
};

// Simple CSS-in-JS styles
const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
  loaderContainer: {
    backgroundColor: "#fff",
    padding: 30,
    borderRadius: 10,
    textAlign: "center",
    boxShadow: "0 0 15px rgba(0,0,0,0.3)",
    minWidth: 250,
  },
  spinner: {
    margin: "0 auto 15px auto",
    width: 40,
    height: 40,
    border: "5px solid #ccc",
    borderTopColor: "#0078d7",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
  message: {
    fontSize: 16,
    marginBottom: 10,
    color: "#333",
  },
  cancelButton: {
    padding: "8px 16px",
    backgroundColor: "#e74c3c",
    border: "none",
    borderRadius: 5,
    color: "#fff",
    cursor: "pointer",
  },
};

// Add keyframes for spinner animation globally (put in your CSS or styled-components)
const spinnerAnimationStyle = `
@keyframes spin {
  to { transform: rotate(360deg); }
}
`;

// Inject keyframes style once (optional)
if (typeof document !== "undefined") {
  const styleEl = document.createElement("style");
  styleEl.appendChild(document.createTextNode(spinnerAnimationStyle));
  document.head.appendChild(styleEl);
}

export default FontGeneratingLoader;
