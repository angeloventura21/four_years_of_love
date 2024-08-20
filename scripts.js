
AOS.init();

        function showConfirmation() {
            document.getElementById('confirmationContainer').style.display = 'block';
            document.querySelector('.show-video-button').style.display = 'none';
            document.querySelector('.hide-video-button').style.display = 'none';
        }

        function showVideo() {
            document.getElementById('downloadvideo').style.display = 'block';
            document.querySelector('.hide-video-button').style.display = 'inline-block';
        }

        function hideVideo() {
            document.getElementById('downloadvideo').style.display = 'none';
            document.querySelector('.show-video-button').style.display = 'inline-block';
            document.querySelector('.hide-video-button').style.display = 'none';
        }

       // Global variable to track the number of attempts
let attemptCount = 0;

// Array of error messages
const errorMessages = [
    'Try again. I know you can do it Mahal ikaw pa',
    'You’re almost there! Don’t give up bebe ko.',
    'Keep going, you’re getting closer! pero mali paren',
    'Don’t lose hope! sawakas naging mali karin .',
    'Believe in yourself! I tama mo yan.',
    'diba Overthinker ka bat dimo alam',
    'Password is Correct. pero Joke lang mali paren',
    'Think Before you click remember to Capslock your password',
    'Almost there! malayo pa',
    'GO MAHAL YOU CAN DO IT',
    'Try again. I know you can do it Mahal ikaw pa',
    'You’re almost there! Don’t give up bebe ko.',
    'Keep going, you’re getting closer! pero mali paren',
    'Don’t lose hope! sawakas naging mali karin .',
    'Believe in yourself! I tama mo yan.',
    'diba Overthinker ka bat dimo alam',
    'Password is Correct. pero Joke lang mali paren',
    'Think Before you click remember to Capslock your password',
    'Almost there! malayo pa',
    'GO MAHAL YOU CAN DO IT',
    'Try again. I know you can do it Mahal ikaw pa',
    'You’re almost there! Don’t give up bebe ko.',
    'Keep going, you’re getting closer! pero mali paren',
    'Don’t lose hope! sawakas naging mali karin .',
    'Believe in yourself! I tama mo yan.',
    'diba Overthinker ka bat dimo alam',
    'Password is Correct. pero Joke lang mali paren',
    'Think Before you click remember to Capslock your password',
    'Almost there! malayo pa',
    'GO MAHAL YOU CAN DO IT',
    'Try again. I know you can do it Mahal ikaw pa',
    'You’re almost there! Don’t give up bebe ko.',
    'Keep going, you’re getting closer! pero mali paren',
    'Don’t lose hope! sawakas naging mali karin .',
    'Believe in yourself! I tama mo yan.',
    'diba Overthinker ka bat dimo alam',
    'Password is Correct. pero Joke lang mali paren',
    'Think Before you click remember to Capslock your password',
    'Almost there! malayo pa',
    'GO MAHAL YOU CAN DO IT'
];

function showError(message) {
    alert(message);
}

function validateName() {
    var name = document.getElementById('nameInput').value.trim();
    
    if (name === '') {
        showError('Please enter the password to confirm.');
    } else if (name === 'HUSTLE') {
        showVideo();
        document.getElementById('confirmationContainer').style.display = 'none';
        attemptCount = 0; // Reset attempt count on successful entry
    } else {
        attemptCount++; // Increment attempt count on each failed attempt
        if (attemptCount <= 40) {
            // Show a specific message based on the number of attempts
            showError(errorMessages[Math.min(attemptCount - 1, errorMessages.length - 1)]);
        }
    }
}

        // Add scroll event listener to apply section effects
        document.addEventListener('scroll', function() {
            const sections = document.querySelectorAll('.section');
            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    section.classList.add('visible');
                } else {
                    section.classList.remove('visible');
                }
            });
        });
        function toggleMemory(element) {
    const memoryText = element.previousElementSibling;
    memoryText.classList.toggle('expanded');
    if (memoryText.classList.contains('expanded')) {
        element.textContent = 'Read Less';
    } else {
        element.textContent = 'Read More';
    }
}
//footer date
document.addEventListener('DOMContentLoaded', (event) => {
    const yearElement = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
});
//message button
document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('toggleMessageButton');
    const messageContainer = document.querySelector('.message-container');

    button.addEventListener('click', function() {
        if (messageContainer.style.display === 'none' || messageContainer.style.display === '') {
            messageContainer.style.display = 'block';
            button.textContent = 'Hide Message';
        } else {
            messageContainer.style.display = 'none';
            button.textContent = 'View Message';
        }
    });
});
