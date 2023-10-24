import React from 'react';

const PdfViewer = ({ pdfUrl }) => {
    const openPdfInNewTab = () => {
        window.open(pdfUrl, '_blank');
    };

    return (
        <div>
            <button onClick={openPdfInNewTab}>Open PDF</button>
        </div>
    );
};

export default PdfViewer;
