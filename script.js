const mobileBtn = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');
const bar3 = document.getElementById('bar3');

let isOpen = false;

function toggleMobileMenu() {
    isOpen = !isOpen;

    if (isOpen) {
        mobileMenu.classList.remove('hidden');
        document.body.style.overflow = 'hidden';

        // Animate to X
        bar1.style.transform = 'rotate(45deg) translate(5px, 6px)';
        bar2.style.opacity = '0';
        bar3.style.transform = 'rotate(-45deg) translate(6px, -6px)';
    } else {
        closeMobileMenu();
    }
};

function closeMobileMenu() {
    isOpen = false;
    mobileMenu.classList.add('hidden');
    document.body.style.overflow = 'visible';

    // Reset hamburger
    bar1.style.transform = 'none';
    bar2.style.opacity = '1';
    bar3.style.transform = 'none';
}

mobileBtn.addEventListener('click', toggleMobileMenu);

  function filterProjects(category) {
    const cards = document.querySelectorAll('.project-card');
    const buttons = document.querySelectorAll('#projects button');
    
    // Reset active state
    buttons.forEach(btn => btn.classList.remove('active-filter', 'bg-indigo-600', 'text-white'));
    
    // Highlight clicked button
    event.currentTarget.classList.add('active-filter', 'bg-indigo-600', 'text-white');
    
    cards.forEach(card => {
      if (category === 'all') {
        card.style.display = 'block';
      } else {
        card.style.display = card.getAttribute('data-category') === category ? 'block' : 'none';
      }
    });
  }
  
  // Simple form submission (demo - replace with your backend later)
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const form = this;
    const originalText = form.querySelector('button').innerHTML;
    
    // Show loading state
    form.querySelector('button').innerHTML = `
      <span class="animate-pulse">Sending your message...</span>
    `;
    
    // Simulate network delay
    setTimeout(() => {
      alert("✅ Thank you! Your message has been sent successfully.\n\nWe'll get back to you within 24 hours.");
      form.reset();
      form.querySelector('button').innerHTML = originalText;
    }, 1800);
  });
