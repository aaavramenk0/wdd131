document.addEventListener('DOMContentLoaded', () => {
    // Retrieve the current review count from localStorage, or initialize it if not present
    let reviewCount = localStorage.getItem('reviewCount');
    if (!reviewCount) {
        reviewCount = 0;
    } else {
        reviewCount = parseInt(reviewCount, 10);
    }

    // Increment the review count
    reviewCount += 1;

    // Store the updated review count back in localStorage
    localStorage.setItem('reviewCount', reviewCount);

    // Display the review count on the page
    const reviewCountElement = document.getElementById('review_count');
    reviewCountElement.innerText = `You have completed ${reviewCount} review(s).`;
})