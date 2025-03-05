<script>
    document.addEventListener("DOMContentLoaded", function () {
        // Select all summary elements inside details (courses)
        const summaries = document.querySelectorAll("#course-menu details summary");

        // Select the right panel
        const courseDetails = document.getElementById("course-details");

        // Function to update course details
        function updateCourseDetails(courseName) {
            courseDetails.innerHTML = `<h2>${courseName}</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien nec eros hendrerit gravida. Curabitur vel justo ut sapien bibendum malesuada at ut mauris.</p>`;
        }

        // Add event listeners to each summary
        summaries.forEach(summary => {
            summary.addEventListener("click", function (event) {
                event.preventDefault(); // Prevent default behavior
                updateCourseDetails(this.textContent.trim());
            });
        });
    });
</script>
