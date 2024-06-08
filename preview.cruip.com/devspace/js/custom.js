const activeClass = "cxmc9 cgygf cg0ht cnp10 ch63g chipd cen0e tab-head active";
const oldClass = "cts6h cb9ru cxslc c2bb0 chipd cen0e tab-head";

document.querySelectorAll(".tab-head").forEach(tabHead => {
    tabHead.addEventListener("click", function() {
        // Remove active class from all tabs and apply oldClass
        document.querySelectorAll(".tab-head").forEach(tab => {
            tab.className = oldClass;
        });

        // Add active class to the clicked tab
        this.className = activeClass;

        // Hide all tab contents
        const tabBody = document.querySelector("#tab-body").children;
        Array.from(tabBody).forEach(content => {
            content.style.display = "none";
        });

        // Show the content corresponding to the clicked tab
        const filterItem = this.getAttribute("id");
        Array.from(tabBody).forEach(content => {
            if (content.getAttribute("id").includes(filterItem)) {
                content.style.display = "block";
            }
        });
    });
});
