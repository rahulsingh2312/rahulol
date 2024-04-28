import  { useEffect } from 'react';

export default function Practicals() {
  useEffect(() => {
    const handleDownload = () => {
      // Replace 'YOUR_GOOGLE_DRIVE_LINK' with your actual Google Drive link
      const googleDriveLink = 'https://drive.google.com/file/d/11ZFh8bT1vJvfg_naQB0Bm_YKI-G-yk3Z/view?usp=sharing';
      // Create an anchor element
      const link = document.createElement('a');
      // Set the href attribute to the Google Drive link
      link.href = googleDriveLink;
      // Add the download attribute to trigger download
      link.setAttribute('download', '');
      // Simulate a click event on the anchor element
      document.body.appendChild(link);
      link.click();
      // Clean up by removing the anchor element
      document.body.removeChild(link);
    };

    handleDownload(); // Call handleDownload when component mounts
  }, []); // Empty dependency array ensures this effect runs only once after the component mounts

  return null; // Render nothing
}
