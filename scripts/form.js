const products = [
    {
        id: 1888,
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: 2050,
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: 1987,
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: 2000,
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: 1969,
        name: "warp equalizer",
        averagerating: 5.0
    }
];


document.addEventListener('DOMContentLoaded', () => {
    const productSelector = document.getElementById('product_selector');

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productSelector.appendChild(option);
    })

})