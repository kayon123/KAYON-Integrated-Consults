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

const projects = [
  {
    title: "Lokoja Zenith Villa",
    location: "Lokoja, Kogi State",
    year: "2024",
    status: "Completed",
    category: "Residential Estate",
    images: [                                      // ← Add as many as you want
      "images/bungalow.jpg"
    ],
    description: "A bespoke 4-bedroom executive bungalow featuring high-vaulted ceilings and an open-plan living area. Designed for maximum airflow and natural light in the heart of Kogi.",
    highlights: ["Solar-powered street lighting", "Smart water management system"],
    testimonial: "Kayon delivered beyond our expectations.",
    client: "— Mr. Adebayo O., Client & Homeowner"
  },
  {
    title: "Contemporary Flat-Roof Bungalow",
    location: "Shettima, Kogi State",
    year: "2023",
    status: "Completed",
    category: "Residential Building",
    images: [
      "images/dan.jpg",
      "images/dan1.jpg",
      "images/dan2.jpg"
    ],
    description: "A masterclass in modern masonry, this 3-bedroom residence features a signature flat-roof design and premium stone-coated tiles for long-lasting durability and style.",
    highlights: ["LEED-inspired green design", "Fully integrated solar power"],
    testimonial: "Professional from concept to handover...",
    client: "- Mr. Ibrahim Danladi, Client & Homeowner"
  },
  {
    title: "Large multi-compartment store",
    location: "Lokoja, Kogi State",
    year: "2023",
    status: "Completed",
    category: "Residential Building",
    images: [
      "images/pharm.jpg",
      "images/pharm1.webp"
    ],
    description: "A masterclass in modern masonry, this 3-bedroom residence features a signature flat-roof design and premium stone-coated tiles for long-lasting durability and style.",
    highlights: ["LEED-inspired green design", "Fully integrated solar power"],
    testimonial: "Professional from concept to handover...",
    client: "— KAYON Integrated Consults Management"
  },
  // Add more projects the same way...
];


let currentProjectIndex = 0;
let currentImageIndex = 0;

function showProjectModal(index) {
  currentProjectIndex = index;
  currentImageIndex = 0;
  const p = projects[index];

  // Fill text
  document.getElementById('modal-title').textContent = p.title;
  document.getElementById('modal-location').textContent = p.location;
  document.getElementById('modal-year').textContent = p.year;
  document.getElementById('modal-status').textContent = p.status;
  document.getElementById('modal-category').textContent = p.category;
  document.getElementById('modal-description').textContent = p.description;
  document.getElementById('modal-testimonial').textContent = p.testimonial;
  document.getElementById('modal-client').innerHTML = p.client;

  // Badge
  const badge = document.getElementById('modal-category-badge');
  badge.textContent = p.category;
  badge.className = p.status === "Completed" 
    ? "px-5 py-1 text-sm font-semibold rounded-3xl bg-emerald-100 text-emerald-700" 
    : "px-5 py-1 text-sm font-semibold rounded-3xl bg-amber-100 text-amber-700";

  // Highlights
  const highlightsContainer = document.getElementById('modal-highlights');
  highlightsContainer.innerHTML = p.highlights.map(h => `
    <div class="flex gap-3">
      <span class="text-emerald-500 text-xl mt-px">✔</span>
      <p class="text-gray-600">${h}</p>
    </div>
  `).join('');

  // Load first image + thumbnails
  loadImages(p.images);

  // Show modal
  document.getElementById('project-modal').classList.remove('hidden');
  document.getElementById('project-modal').classList.add('flex');
}

function loadImages(images) {
  currentImageIndex = 0;
  document.getElementById('modal-main-image').src = images[0];

  // Thumbnails
  const thumbContainer = document.getElementById('modal-thumbnails');
  thumbContainer.innerHTML = images.map((src, i) => `
    <img src="${src}" 
         onclick="changeImage(${i})" 
         class="w-20 h-20 object-cover rounded-2xl cursor-pointer border-2 ${i === 0 ? 'border-indigo-600' : 'border-transparent'} hover:border-indigo-400 transition-all">
  `).join('');
}

function changeImage(index) {
  currentImageIndex = index;
  const images = projects[currentProjectIndex].images;
  document.getElementById('modal-main-image').src = images[index];

  // Update active thumbnail
  const thumbs = document.querySelectorAll('#modal-thumbnails img');
  thumbs.forEach((thumb, i) => {
    thumb.classList.toggle('border-indigo-600', i === index);
    thumb.classList.toggle('border-transparent', i !== index);
  });
}

function nextImage() {
  const images = projects[currentProjectIndex].images;
  currentImageIndex = (currentImageIndex + 1) % images.length;
  changeImage(currentImageIndex);
}

function prevImage() {
  const images = projects[currentProjectIndex].images;
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  changeImage(currentImageIndex);
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

// Close when clicking outside
document.getElementById('project-modal').addEventListener('click', function(e) {
  if (e.target.id === 'project-modal') closeProjectModal();
});