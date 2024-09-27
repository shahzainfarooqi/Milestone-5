 // Generate the PDF
 function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Retrieve the form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const summary = document.getElementById('summary').value;
    const skills = document.getElementById('skills').value;

    // Populate PDF with the form data
    doc.text("Resume", 10, 10);
    doc.text(`Name: ${name}`, 10, 20);
    doc.text(`Email: ${email}`, 10, 30);
    doc.text(`Summary: ${summary}`, 10, 40);
    doc.text(`Skills: ${skills}`, 10, 50);

    // Save the generated PDF
    doc.save(`${name}_Resume.pdf`);
}

// Generate Shareable Link
function generateShareableLink() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const summary = document.getElementById('summary').value;
    const skills = document.getElementById('skills').value;

    // Create a simple URL (you can modify this to use server-side link generation)
    const encodedName = encodeURIComponent(name);
    const encodedEmail = encodeURIComponent(email);
    const encodedSummary = encodeURIComponent(summary);
    const encodedSkills = encodeURIComponent(skills);

    // Assuming you'll save this data on the server and generate a link (mock URL here)
    const shareableLink = `https://yourwebsite.com/resume?name=${encodedName}&email=${encodedEmail}&summary=${encodedSummary}&skills=${encodedSkills}`;

    // Display the shareable link on the page
    document.getElementById('shareableLink').innerHTML = `
        <p>Shareable Link: <a href="${shareableLink}" target="_blank">${shareableLink}</a></p>
    `;
}