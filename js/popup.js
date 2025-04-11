document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('experiencePopup');
    const closeBtn = document.querySelector('.close');
    const viewMoreButtons = document.querySelectorAll('.view-more-btn');

    // Debug log to check if elements are found
    console.log('Popup element:', popup);
    console.log('Close button:', closeBtn);
    console.log('View more buttons:', viewMoreButtons.length);

    // Function to open popup with experience details
    function openPopup(experienceData) {
        const banner = document.getElementById('popup-banner');
        const title = document.getElementById('popup-title');
        const company = document.getElementById('popup-company');
        const duration = document.getElementById('popup-duration');
        const detailsList = document.getElementById('popup-details-list');

        // Debug log
        console.log('Opening popup with data:', experienceData);

        // Set the banner image if available
        if (experienceData.banner) {
            banner.style.backgroundImage = `url(${experienceData.banner})`;
        }

        // Set the text content
        title.textContent = experienceData.title || '';
        company.textContent = experienceData.company || '';
        duration.textContent = experienceData.duration || '';

        // Clear and populate the details list
        detailsList.innerHTML = '';
        if (experienceData.details && Array.isArray(experienceData.details)) {
            experienceData.details.forEach(detail => {
                const li = document.createElement('li');
                li.textContent = detail;
                detailsList.appendChild(li);
            });
        } else {
            console.error('Details is not an array:', experienceData.details);
        }

        // Show the popup with active class
        popup.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when popup is open
    }

    // Function to close popup
    function closePopup() {
        popup.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }

    // Add click event listeners to view more buttons
    viewMoreButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default button behavior
            e.stopPropagation(); // Prevent event from bubbling to the card
            
            console.log('View more button clicked');
            
            const card = button.closest('.experience-card');
            if (!card) {
                console.error('Parent card not found');
                return;
            }
            
            // Get the raw data-details attribute
            const rawDetails = card.getAttribute('data-details');
            console.log('Raw details attribute:', rawDetails);
            
            let details = [];
            try {
                // Try to parse the JSON
                if (rawDetails) {
                    details = JSON.parse(rawDetails);
                    console.log('Successfully parsed details:', details);
                } else {
                    console.error('data-details attribute is empty');
                }
            } catch (error) {
                console.error('Error parsing details:', error);
                console.error('Raw details that caused error:', rawDetails);
                
                // Fallback: Try to extract the content from the card's visible list
                const cardList = card.querySelector('.experience-body ul');
                if (cardList) {
                    const listItems = cardList.querySelectorAll('li');
                    details = Array.from(listItems).map(li => li.textContent);
                    console.log('Using fallback details from card:', details);
                }
            }
            
            const experienceData = {
                title: card.getAttribute('data-title'),
                company: card.getAttribute('data-company'),
                duration: card.getAttribute('data-duration'),
                location: card.getAttribute('data-location'),
                banner: card.getAttribute('data-banner'),
                details: details
            };
            
            console.log('Experience data:', experienceData);
            openPopup(experienceData);
        });
    });

    // Close popup when clicking the close button
    closeBtn.addEventListener('click', closePopup);

    // Close popup when clicking outside the content
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            closePopup();
        }
    });

    // Close popup when pressing Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closePopup();
        }
    });
    
    // Ensure popup is hidden on page load
    popup.classList.remove('active');
    
    // Log a message to confirm the script has loaded
    console.log('Popup script loaded successfully');
}); 