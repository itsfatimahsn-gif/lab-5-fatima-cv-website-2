/* =========================================
   FATIMA HASSAN — INTERACTIVE CV
========================================= */

const sections = {
    intro: {
        number: "01",
        eyebrow: "01 / PROFILE",
        title: "A little about me",

        content: `
            <p>
                I am a motivated professional interested in technology,
                digital media, and online communication. My experience
                includes WordPress development, email marketing, document
                editing, and virtual assistance.
            </p>

            <p>
                I enjoy learning new tools, solving problems, and producing
                organized, high-quality work.
            </p>
        `
    },

    education: {
        number: "02",
        eyebrow: "02 / EDUCATION",
        title: "My academic journey",

        content: `
            <div class="timeline-item">
                <strong>BS Computer Science</strong>
                <span>2024 – 2027</span>
                <p>Qarshi University</p>
            </div>

            <div class="timeline-item">
                <strong>Intermediate in Computer Science (ICS)</strong>
                <span>2021 – 2023</span>
                <p>Punjab Group of Colleges, Lahore</p>
            </div>

            <div class="timeline-item">
                <strong>Matriculation</strong>
                <span>2019 – 2021</span>
                <p>American Lycetuff, Lahore</p>
            </div>
        `
    },

    experience: {
        number: "03",
        eyebrow: "03 / EXPERIENCE",
        title: "Professional experience",

        content: `
            <div class="timeline-item">
                <strong>Document Editor &amp; Email Marketer</strong>
                <span>SecureLink · 2026 – Present</span>
                <p>Document editing and email marketing responsibilities.</p>
            </div>

            <div class="timeline-item">
                <strong>WordPress Developer</strong>
                <span>G. Ali &amp; Co.</span>
                <p>WordPress website development and related tasks.</p>
            </div>

            <div class="timeline-item">
                <strong>Digital Media Marketing</strong>
                <span>Accord Manpower</span>
                <p>Digital media and online promotion activities.</p>
            </div>

            <div class="timeline-item">
                <strong>Virtual Assistance &amp; Data Entry</strong>
                <span>Various assignments</span>
                <p>Administrative support and data entry work.</p>
            </div>
        `
    },

    skills: {
        number: "04",
        eyebrow: "04 / SKILLS",
        title: "My professional toolkit",

        content: `
            <h4>Digital Marketing</h4>

            <div class="tag-list">
                <span class="tag">SEO</span>
                <span class="tag">Email Marketing</span>
                <span class="tag">Digital Media</span>
                <span class="tag">Online Promotion</span>
            </div>

            <h4>Technical &amp; Office</h4>

            <div class="tag-list">
                <span class="tag">WordPress</span>
                <span class="tag">Website Content</span>
                <span class="tag">Microsoft Office</span>
                <span class="tag">Data Entry</span>
            </div>

            <h4>Creative &amp; Personal</h4>

            <div class="tag-list">
                <span class="tag">Content Writing</span>
                <span class="tag">Graphic Design</span>
                <span class="tag">Video Content</span>
                <span class="tag">Document Formatting</span>
                <span class="tag">Communication</span>
                <span class="tag">Teamwork</span>
                <span class="tag">Time Management</span>
                <span class="tag">Problem-Solving</span>
            </div>
        `
    },

    languages: {
        number: "05",
        eyebrow: "05 / LANGUAGES",
        title: "Languages I know",

        content: `
            <p>
                I can communicate in the following languages:
            </p>

            <div class="tag-list">
                <span class="tag">English</span>
                <span class="tag">Urdu</span>
                <span class="tag">Punjabi</span>
                <span class="tag">Arabic — Basic</span>
            </div>
        `
    },

    contact: {
        number: "06",
        eyebrow: "06 / CONTACT",
        title: "Let's connect",

        content: `
            <p>
                Feel free to contact me for professional opportunities
                and collaboration.
            </p>

            <h4>Email</h4>

            <p>
                <a href="mailto:itsfatima.hsn@hotmail.com">
                    itsfatima.hsn@hotmail.com
                </a>
            </p>

            <h4>Phone</h4>

            <p>
                <a href="tel:+923241595101">
                    +92 324 1595101
                </a>
            </p>

            <h4>Location</h4>

            <p>Lahore, Pakistan</p>

            <h4>LinkedIn</h4>

            <p>
                <a href="https://www.linkedin.com/in/ffhsn/"
                   target="_blank"
                   rel="noopener noreferrer">
                    View my LinkedIn profile ↗
                </a>
            </p>
        `
    }
};


/* GET ELEMENTS */

const cards = document.querySelectorAll(".cv-card");

const sectionNumber = document.getElementById("sectionNumber");
const detailEyebrow = document.getElementById("detailEyebrow");
const detailTitle = document.getElementById("detailTitle");
const detailContent = document.getElementById("detailContent");


/* DISPLAY SELECTED SECTION */

function showSection(sectionKey, selectedCard) {
    const section = sections[sectionKey];

    if (!section) {
        return;
    }

    cards.forEach((card) => {
        card.classList.remove("active");
        card.setAttribute("aria-pressed", "false");
    });

    selectedCard.classList.add("active");
    selectedCard.setAttribute("aria-pressed", "true");

    sectionNumber.textContent = section.number;
    detailEyebrow.textContent = section.eyebrow;
    detailTitle.textContent = section.title;

    detailContent.innerHTML = section.content;
}


/* ADD CLICK EVENTS */

cards.forEach((card) => {
    card.addEventListener("click", () => {
        showSection(card.dataset.section, card);
    });
});