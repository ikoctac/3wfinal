// Function to show content based on sectionId
function showContent(sectionId) {
    var sections = document.querySelectorAll('.content-section');
    var selectedSection = document.getElementById(sectionId);

    sections.forEach(function(section) {
        section.classList.remove('active');
        section.style.display = 'none';
    });

    // Show the selected section
    selectedSection.classList.add('active');
    selectedSection.style.display = 'block';
}
