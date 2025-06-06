// 📄 src/App.js
import React, { useState } from "react";

function App() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    // setFile(e.target.files);

    // console.log("Selected file:", e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select a PDF file");

    const formData = new FormData();
    formData.append("file", file);

    console.log("Uploading formData:", formData);

    setLoading(true);
    try {

          console.log("Uploading formData:", formData);
          
      const response = await fetch("http://railsetu.in:5000/convert/pdf", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Conversion failed");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "tally-ledger.csv";
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (err) {
      alert("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2>🧾 Bank PDF to Tally CSV Converter</h2>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={loading || !file}>
        {loading ? "Converting..." : "Convert & Download CSV"}
      </button>
    </div>
  );
}

const styles = {
  container: {
    padding: "2rem",
    fontFamily: "Arial",
    textAlign: "center",
  },
};

export default App;
