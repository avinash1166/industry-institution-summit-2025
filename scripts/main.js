// Mobile Navigation Toggle with improved functionality
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Only prevent default if it's an internal link
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Header background change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Schedule tabs functionality
const tabBtns = document.querySelectorAll('.tab-btn');
const scheduleDays = document.querySelectorAll('.schedule-day');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const day = btn.dataset.day;
        
        // Remove active class from all tabs and days
        tabBtns.forEach(tab => tab.classList.remove('active'));
        scheduleDays.forEach(scheduleDay => scheduleDay.classList.remove('active'));
        
        // Add active class to clicked tab and corresponding day
        btn.classList.add('active');
        document.getElementById(day).classList.add('active');
    });
});

// Panel details functionality
const panelData = {
    panel1: {
        title: "Panel Discussion 1: Cybersecurity Paradox: Convenience vs. Security",
        moderator: "Dr. Thangakumar J, Associate Dean CS, HITS",
        moderatorImage: "assets/images/PD_1_images/Dr. Thangakumar PD - 1.png",
        panelists: [
            { name: "Ms. Kavitha Ayappan", title: "Practice Head-Cyber Security & CISO, Neurealm", image: "assets/images/PD_1_images/Ms. Kavitha Ayappan PD - 1.png" },
            { name: "Mr. Aravind Gnanabaskaran", title: "AGM-Head of Cyber Security Practice, Expleo Group", image: "assets/images/PD_1_images/Mr Aravind PD - 1.png" },
            { name: "Mr. Gerald Victor", title: "CISO, Sight Spectrum", image: "assets/images/PD_1_images/Mr Gerald Victor PD - 1.png" },
            { name: "Ms. Kavitha Karunakaran", title: "Cyber Security Strategist, Staples", image: "assets/images/PD_1_images/Ms Kavitha Karunakaran PD - 1.png" },
            { name: "Ms. Vimalaasree Anandhan", title: "Leader-Cyber Security, Poshmark", image: "assets/images/PD_1_images/Ms Vimalashree PD - 1.png" }
        ]
    },
    panel2: {
        title: "Panel Discussion 2: AI in Cyber Defense: The Rise of Autonomous Security Systems",
        moderator: "Mr. Viqaruddin Surki, Delivery Head, IBM Innovation Centre for Education",
        moderatorImage: "assets/images/PD_2_images/Mr viqaruddin Surki PD - 2.png",
        panelists: [
            { name: "Dr. Saravanan Velrajan", title: "Head, Digital Consulting, Ginkos India", image: "assets/images/PD_2_images/Dr Saravanan Velraj PD - 2.png" },
            { name: "Mr. Ramu Para", title: "Cyber Security Leader, HTC Global Services", image: "assets/images/PD_2_images/Mr Ramu Para PD - 2.png" },
            { name: "Mr. Gowdhaman Jothilingam", title: "Global CISO, Head of Information Technology, Latent View", image: "assets/images/PD_2_images/Mr Gowthaman Jyothilingam PD - 2.png" },
            { name: "Ms. Archana Iyengar", title: "Chief Marketing Officer, MiBot Ventures" },
            { name: "Mr. Hari Ramasubramanian", title: "Leader - Business Development & CR, IBM ICE" },
            { name: "Mr. Mani Madhukar", title: "Program Lead-IBM Innovation Center for Education, IBM" }
        ]
    },
    panel3: {
        title: "Panel Discussion 3: Human Firewall: The Psychology of Cybersecurity",
        moderator: "Dr. P. Mohan, Prof & Head (DISC), HITS",
        moderatorImage: "assets/images/PD_3_images/Dr Mohan Kumar PD - 3.png",
        panelists: [
            { name: "Dr. Prabhakar Ramakrishnan", title: "CISO, TnQ Technologies", image: "assets/images/PD_3_images/Mr Prabhakar PD - 3.png" },
            { name: "Ms. Ashwini Priyanka Rajendran", title: "Founder and CEO, Cyber Security Expert, ASSR Emphorium", image: "assets/images/PD_3_images/Ms Ashwini Priyanka Rajendran PD - 3.png" },
            { name: "Mr. Shrijith D", title: "Software Consulting Engineer, CISCO Systems", image: "assets/images/PD_3_images/Mr Shrijith PD - 3.png" },
            { name: "Ms. J. Kanya", title: "Module Lead, TechMahindra, Bangalore" },
            { name: "Dr. Paulraj M", title: "Senior Professor, CSE, Hindustan Institute of Technology and Science" }
        ]
    },
    panel4: {
        title: "Panel Discussion 4: The Future of Cyber Security and Digital Ethics",
        moderator: "Dr. S. Alagu, Dean (CS), Hindustan College of Arts & Science",
        moderatorImage: "assets/images/PD_4_images/Mr Jayaseelan PD - 4.png",
        panelists: [
            { name: "Mr. Vennimaal Murugan", title: "Project Manager, TCS" },
            { name: "Mr. Akash Venkatesan", title: "Founder and CEO, Titelr Infoser Pvt. Ltd" },
            { name: "Mr. Gokulavan Jayaraman", title: "Infosec Leader, Mahindra and Mahindra" },
            { name: "Mr. Abhishek Sansuel", title: "Product Manager, Ford" },
            { name: "Mr. Kalaikuvan Antony", title: "Director of Technology, Chief Technology Officer, MiBot Ventures" }
        ]
    },
    panel5: {
        title: "Panel Discussion 5: Cyber Security in the age of Blockchain and cryptocurrencies and the legal issues",
        moderator: "Dr. M. Krishnamurthy, Professor (CSE), KCG College of Technology",
        moderatorImage: "assets/images/PD_5_images/Dr M Krishnamurthy PD - 5.png",
        panelists: [
            { name: "Mr. Rajendran", title: "Cyber Law advocate, Chairman, Digital Security Association of India (DisAI)" },
            { name: "Mr. Vinod Senthil", title: "Founder and CEO, InfySeC" },
            { name: "Ms. Simila A.", title: "Cyber Consultant, Puducherry" },
            { name: "Mr. Magashwarahan A", title: "Security Researcher, Associate, HTC Global Services" },
            { name: "Mr. Renganathan P", title: "Founder of R. Protocols, Chennai" }
        ]
    },
    panel6: {
        title: "Panel Discussion 6: Protecting Critical Infrastructure: The Next Cyber Battleground",
        moderator: "Ms. Savitha KV, Head (CSE), Hindustan College, Mysore",
        panelists: [
            { name: "Mr. Ravichandran Swaminathan", title: "Cyber Consultant, Coimbatore" },
            { name: "Mr. Prakasam U.P", title: "Director, Nebula Solutions" },
            { name: "Dr. A.L. Vallikannu", title: "Dean Research, Hindustan Institute of Technology and Science" },
            { name: "Dr. Hema V", title: "Cyber Consultant, Chennai" },
            { name: "Mr. Suresh Venkatachalam", title: "Vice President, Hinduja Tech Ltd." }
        ]
    },
    panel7: {
        title: "Panel Discussion 7: Digital Sovereignty: Securing Data in a Borderless World",
        moderator: "Dr. Sudalai Muthu T, CISO, Prof & Head (CSE), HITS",
        moderatorImage: "assets/images/PD_7_images/Dr. Sudalai Muthu PD - 7.png",
        panelists: [
            { name: "Ms. Ananthi", title: "Cyber security Lead Consultant, AstraZeneca" },
            { name: "Mr. Bala Murugan", title: "Sr. Delivery Manager, L&T", image: "assets/images/PD_7_images/Mr Balu Arumugam PD - 7.png" },
            { name: "Ms. Malathi R", title: "Senior Enterprise Architect, Impetus Technologies" },
            { name: "Dr. Augustus Devarajan", title: "Product Manager, Real Time Core, Chennai", image: "assets/images/PD_7_images/Dr Augustus Devarajan PD - 7.png" },
            { name: "Mr. Ramesh A", title: "Senior Architect, IBM, Bangalore" }
        ]
    }
};

// Add click event listeners to clickable panels
document.querySelectorAll('.clickable-panel').forEach(panel => {
    panel.addEventListener('click', () => {
        const panelId = panel.dataset.panel;
        const panelInfo = panelData[panelId];
        
        if (panelInfo) {
            showPanelDetails(panelInfo);
        }
    });
});

function showPanelDetails(panelInfo) {
    const modal = document.getElementById('panel-details');
    const content = document.getElementById('panel-content');
    
    content.innerHTML = `
        <h2>${panelInfo.title}</h2>
        <div class="moderator-section">
            ${panelInfo.moderatorImage ? `
                <div class="moderator-card">
                    <img src="${panelInfo.moderatorImage}" alt="${panelInfo.moderator}" class="moderator-image">
                    <div class="moderator-info">
                        <p><strong>Moderator:</strong></p>
                        <p>${panelInfo.moderator}</p>
                    </div>
                </div>
            ` : `
                <p><strong>Moderator:</strong> ${panelInfo.moderator}</p>
            `}
        </div>
        <h3>Panelists:</h3>
        <div class="panelist-grid">
            ${panelInfo.panelists.map(panelist => `
                <div class="panelist-card">
                    ${panelist.image ? `<img src="${panelist.image}" alt="${panelist.name}" class="panelist-image">` : ''}
                    <div class="panelist-info">
                        <h4>${panelist.name}</h4>
                        <p>${panelist.title}</p>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    modal.style.display = 'block';
}

// Close panel modal
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('panel-details');
    const closeBtn = document.querySelector('.close-panel');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }
    
    // Close when clicking outside the modal
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll(
        '.stat-item, .speaker-card, .schedule-item, .contact-card'
    );
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px)';
        observer.observe(el);
    });
});

// Counter animation for statistics
function animateCounters() {
    const counters = document.querySelectorAll('.stat-item h3');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        let current = 0;
        const increment = target / 50;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            if (target >= 100) {
                counter.textContent = Math.floor(current) + '+';
            } else {
                counter.textContent = Math.floor(current);
            }
        }, 30);
    });
}

// Trigger counter animation when stats section is visible
const statsSection = document.querySelector('.about-stats');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statsObserver.observe(statsSection);
}

// Form field focus effects
document.querySelectorAll('.form-group input, .form-group select').forEach(field => {
    field.addEventListener('focus', () => {
        field.parentElement.style.transform = 'translateY(-2px)';
    });
    
    field.addEventListener('blur', () => {
        field.parentElement.style.transform = 'translateY(0)';
    });
});

// Copy contact information
document.querySelectorAll('.contact-details div').forEach(contactItem => {
    contactItem.style.cursor = 'pointer';
    contactItem.title = 'Click to copy';
    
    contactItem.addEventListener('click', () => {
        const text = contactItem.textContent.trim();
        navigator.clipboard.writeText(text).then(() => {
            showNotification('Contact information copied to clipboard!', 'success');
        }).catch(() => {
            showNotification('Failed to copy. Please select and copy manually.', 'error');
        });
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Loading animation
window.addEventListener('load', () => {
    const loader = document.createElement('div');
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        transition: opacity 0.5s ease;
    `;
    
    loader.innerHTML = `
        <div style="text-align: center; color: white;">
            <div style="width: 50px; height: 50px; border: 3px solid rgba(255,255,255,0.3); border-top: 3px solid white; border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto 20px;"></div>
            <h2>Loading Summit...</h2>
        </div>
        <style>
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        </style>
    `;
    
    document.body.appendChild(loader);
    
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.remove();
        }, 500);
    }, 1000);
});

// Easter egg - Konami code
let konamiCode = [];
const konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // Up, Up, Down, Down, Left, Right, Left, Right, B, A

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.keyCode);
    if (konamiCode.length > konami.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.toString() === konami.toString()) {
        showNotification('🎉 Easter egg activated! Welcome, fellow developer!', 'success');
        document.body.style.filter = 'hue-rotate(45deg)';
        setTimeout(() => {
            document.body.style.filter = 'none';
        }, 3000);
    }
});

// Print functionality
function printSchedule() {
    window.print();
}

// Add print button to schedule section
document.addEventListener('DOMContentLoaded', () => {
    const scheduleHeader = document.querySelector('.schedule .section-header');
    if (scheduleHeader) {
        const printBtn = document.createElement('button');
        printBtn.textContent = 'Print Schedule';
        printBtn.className = 'btn btn-secondary';
        printBtn.style.marginTop = '1rem';
        printBtn.onclick = printSchedule;
        scheduleHeader.appendChild(printBtn);
    }
});