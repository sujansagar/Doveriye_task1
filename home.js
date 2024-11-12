// cards wishlist toggle


const wishlistCount = document.getElementById('countlove'); // Get the wishlist counter element
let count = 0; // Initial wishlist count

// Add event listener to all heart icons
document.querySelectorAll('#love').forEach(heartIcon => {
    heartIcon.addEventListener('click', () => {
        // Toggle heart icon fill state and color
        heartIcon.classList.toggle('bi-heart-fill');
        heartIcon.classList.toggle('bi-heart');
        
        if (heartIcon.classList.contains('bi-heart-fill')) {
            heartIcon.style.color = 'red'; // Filled heart
            count++; // Increment count
            alert('Product is added to the wishlist'); // Show add alert
        } else {
            heartIcon.style.color = 'white'; // Unfilled heart
            if (count > 0) count--; // Decrement count
            alert('Product is removed from the wishlist'); // Show remove alert
        }

        // Update wishlist count in navigation
        wishlistCount.textContent = count;
    });
});


// cart incrementing

const cartCount = document.querySelector('#cartincrement'); // Get the cart count element
let cartTotal = 0; // Initial cart count

// Function to update the cart count display
const updateCartCount = () => {
    cartCount.textContent = cartTotal; // Update the displayed count
};

// Add event listener to all "ADD" buttons
document.querySelectorAll('#buttoncart').forEach(button => {
    button.addEventListener('click', () => {
        // Check if the button has been clicked already
        if (button.classList.contains('added')) {
            cartTotal--; // Decrement the count if it was added
            button.classList.remove('added'); // Remove the added class
            alert('Product is removed from the cart'); // Show remove alert
        } else {
            cartTotal++; // Increment the count if it was not added
            button.classList.add('added'); // Add a class to indicate it was added
            alert('Product is added to the cart'); // Show add alert
        }
        updateCartCount(); // Update the count display
    });
});

// Initial display update
updateCartCount();
