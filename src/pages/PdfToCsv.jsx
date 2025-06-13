import React, { useState } from "react";

function PdfToCsvAndXml() {
  const [file, setFile] = useState(null);
  const [loadingCsv, setLoadingCsv] = useState(false);
  const [loadingXml, setLoadingXml] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleConvert = async (format) => {
    if (!file) return alert("Please select a PDF file");

    const formData = new FormData();
    formData.append("file", file);

    // const endpoint =
    //   format === "csv"
    //     ? "http://localhost:5000/convert/pdf"
    //     : "http://localhost:5000/convert/xml";

        const endpoint =
      format === "csv"
        ? "https://railsetu.in:5000/convert/pdf"
        : "https://railsetu.in:5000/convert/xml";

    if (format === "csv") setLoadingCsv(true);
    else setLoadingXml(true);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Conversion failed");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");

      a.href = url;
      a.download = `tally-ledger.${format}`;
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (err) {
      alert("Error: " + err.message);
    } finally {
      if (format === "csv") setLoadingCsv(false);
      else setLoadingXml(false);
    }
  };

  return (
    <div style={styles.container}>
      
      <h2>🧾 Bank PDF to Tally CSV & XML Converter</h2>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />

      <div style={{ marginTop: "1rem" }}>
        <button onClick={() => handleConvert("csv")} disabled={loadingCsv || !file}>
          {loadingCsv ? "Converting..." : "Download CSV"}
        </button>
        <button onClick={() => handleConvert("xml")} disabled={loadingXml || !file} style={{ marginLeft: "1rem" }}>
          {loadingXml ? "Converting..." : "Download XML"}
        </button>
      </div>
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

export default PdfToCsvAndXml;
