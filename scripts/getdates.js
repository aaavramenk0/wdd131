let currentYear = document.getElementById('currentyear');
let lastModified = document.getElementById('lastmodified');

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = document.lastModified;