const properties = [
    {
        id: 1,
        title: "Luxury Villa in Riyadh",
        city: "Riyadh",
        type: "Villa",
        purpose: "Buy",
        price: "3,200,000 SAR",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6"
    },
    {
        id: 2,
        title: "Modern Apartment in Jeddah",
        city: "Jeddah",
        type: "Apartment",
        purpose: "Buy",
        price: "1,100,000 SAR",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
    },
    {
        id: 3,
        title: "Rental Office in Dammam",
        city: "Dammam",
        type: "Office",
        purpose: "Rent",
        price: "120,000 SAR / year",
        image: "https://images.unsplash.com/photo-1494526585095-c41746248156"
    },
    {
        id: 4,
        title: "Luxury Apartment in Khobar",
        city: "Khobar",
        type: "Apartment",
        purpose: "Rent",
        price: "85,000 SAR / year",
        image: "https://images.unsplash.com/photo-1484154218962-a197022b5858"
    }
];

const propertyContainer = document.getElementById("propertyContainer");

function renderProperties(data) {
    propertyContainer.innerHTML = "";

    if (data.length === 0) {
        propertyContainer.innerHTML = "<p>No properties found.</p>";
        return;
    }

    data.forEach(property => {
        propertyContainer.innerHTML += `
            <div class="card">
                <img src="${property.image}" alt="${property.title}">
                <h3>${property.title}</h3>
                <p>${property.price}</p>
                <p>${property.city} | ${property.type} | ${property.purpose}</p>
                <a href="#">View Details</a>
            </div>
        `;
    });
}

function filterProperties() {
    const city = document.getElementById("searchCity").value.toLowerCase();
    const type = document.getElementById("searchType").value;
    const purpose = document.getElementById("searchPurpose").value;

    const filtered = properties.filter(property => {
        return (
            (city === "" || property.city.toLowerCase().includes(city)) &&
            (type === "" || property.type === type) &&
            (purpose === "" || property.purpose === purpose)
        );
    });

    renderProperties(filtered);
}

renderProperties(properties);