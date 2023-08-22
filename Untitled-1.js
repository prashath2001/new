// const fs = require('fs');
// const path = require('path');
// const PDFDocument = require('pdfkit');

// // Define the paths to the folders containing images
// const folderPaths = [
//   'C:/Users/PRASHATH/Downloads/new/201E Tapping photos/201E Tapping photos/East',
//   'C:/Users/PRASHATH/Downloads/new/201E Tapping photos/201E Tapping photos/North'
// ];

// // Create a new PDF document
// const doc = new PDFDocument();
// const outputPath = 'output.pdf';
// const outputStream = fs.createWriteStream(outputPath);
// doc.pipe(outputStream);

// // Define table layout
// const table = {
//   headers: ['Folder', 'Image'],
//   widths: [200, 300],
//   cellPadding: 10
// };

// // Iterate through folder paths
// folderPaths.forEach((folderPath, index) => {
//   const folderName = path.basename(folderPath);

//   // Add folder name to the PDF
//   doc
//     .fontSize(18)
//     .text(`Folder: ${folderName}`, { align: 'center' })
//     .moveDown();

//   // Read images from the folder and add them to the table
//   const imageFiles = fs.readdirSync(folderPath).filter(file => file.endsWith('.jpg')); // Adjust file extension as needed

//   imageFiles.forEach(imageFile => {
//     const imagePath = path.join(folderPath, imageFile);
//     doc
//       .image(imagePath, { width: 150 })
//       .text(imageFile, { align: 'center' })
//       .moveDown();
//   });

//   // Add a page break between folders (except for the last folder)
//   if (index < folderPaths.length - 1) {
//     doc.addPage();
//   }
// });

// // Finalize the PDF
// doc.end();

// console.log(`PDF generated at: ${outputPath}`);


const fs = require('fs');
const path = require('path');

// Define the paths to the folders containing images
const folderPaths = [
  'C:/Users/PRASHATH/Downloads/new/201E Tapping photos/201E Tapping photos/East',
  'C:/Users/PRASHATH/Downloads/new/201E Tapping photos/201E Tapping photos/North'
];

// Create an HTML table
let tableHtml = '<table border="1"><tr><th>Folder</th><th>Image</th></tr>';

// Iterate through folder paths
folderPaths.forEach(folderPath => {
  const folderName = path.basename(folderPath);

  // Read images from the folder and add them to the table
  const imageFiles = fs.readdirSync(folderPath).filter(file => file.endsWith('.jpg')); // Adjust file extension as needed

  imageFiles.forEach(imageFile => {
    const imagePath = path.join(folderPath, imageFile);
    tableHtml += `
      <tr>
        <td>${folderName}</td>
        <td><img src="file://${imagePath}" alt="${imageFile}" width="150"></td>
      </tr>
    `;
  });
});

// Close the HTML table
tableHtml += '</table>';

// Save the HTML table to a file
const outputPath = 'output.html';
fs.writeFileSync(outputPath, tableHtml);

console.log(`Table HTML generated at: ${outputPath}`);
