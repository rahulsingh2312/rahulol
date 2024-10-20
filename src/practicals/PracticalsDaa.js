import { useEffect } from 'react';

export default function Practicals() {
  useEffect(() => {
    const handleDownload = () => {
      // Replace 'YOUR_FILE_URL' with the URL of the file you want to download
      const fileUrl = '/HigherStudies.pdf';
      // Specify the filename for the downloaded file
      const filename = 'higherstudies.pdf';
      // Create an anchor element
      const link = document.createElement('a');
      // Set the href attribute to the file URL
      link.href = fileUrl;
      // Set the download attribute to the desired filename
      link.setAttribute('download', filename);
      // Simulate a click event on the anchor element
      document.body.appendChild(link);
      link.click();
      // Clean up by removing the anchor element
      document.body.removeChild(link);
    };

    handleDownload(); // Call handleDownload when component mounts
  }, []); // Empty dependency array ensures this effect runs only once after the component mounts

  return(<><div>hi , have a nice day</div></>) 
   // Render nothing
}
