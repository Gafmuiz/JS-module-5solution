        // Categories data
        const categories = [
            { short_name: "CH", name: "Chicken", content: "Our famous crispy and tender chicken dishes, prepared fresh daily with secret spices passed down through generations." },
            { short_name: "BF", name: "Beef", content: "Premium cuts of beef, slow-cooked to perfection. From juicy burgers to hearty steaks, we have something for every beef lover." },
            { short_name: "SU", name: "Sushi", content: "Fresh and authentic sushi prepared by our expert chefs. We source the finest fish daily to bring you the best sushi experience." },
            { short_name: "LU", name: "Lunch", content: "Quick and delicious lunch options perfect for your midday break. Healthy, fresh, and always satisfying." },
            { short_name: "DI", name: "Dinner", content: "Elegant dinner options for a perfect evening. Whether dining alone or with family, our dinner menu has something special." },
        ]

        // Show home page
        function showHome() {
            document.getElementById("page-home").style.display = "block"
            document.getElementById("page-category").style.display = "none"
            document.getElementById("page-map").style.display = "none"
        }

        // Load a specific category by short_name
        function loadMenuItems(short_name) {
    let content = ""
    let title = ""

    if (short_name === "ALL") {
        title = "Our Full Menu"
        content = categories.map(category => `
            <div class="col-12 menu-section bg-dark text-white p-4 mb-3 rounded">
                <h3 class="text-center">${category.name}</h3>
                <p>${category.content}</p>
            </div>
        `).join("")
    } else {
        const category = categories.find(c => c.short_name === short_name)
        if (!category) return
        title = category.name
        content = `
            <div class="col-12 menu-section bg-dark text-white p-4 rounded">
                <p>${category.content}</p>
            </div>
        `
    }

    document.getElementById("category-title").textContent = title
    document.getElementById("category-content").innerHTML = content
    document.getElementById("page-home").style.display = "none"
    document.getElementById("page-map").style.display = "none"
    document.getElementById("page-category").style.display = "block"
}

        // Pick a random category and load it
        function loadRandomSpecials() {
            const randomIndex = Math.floor(Math.random() * categories.length)
            const randomCategoryShortName = categories[randomIndex].short_name
            loadMenuItems(randomCategoryShortName)
        }

        // Show map page
        function showMap() {
            document.getElementById("page-home").style.display = "none"
            document.getElementById("page-category").style.display = "none"
            document.getElementById("page-map").style.display = "block"
        }
