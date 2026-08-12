document.addEventListener("DOMContentLoaded", () => {
    // Animasi scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    const observeElements = () => {
        document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    };
    
    observeElements();

    try {
        // --- INDEX PAGE LOGIC ---
        const grid = document.getElementById('skills-grid');
        if (grid) {
            grid.innerHTML = ''; 
            
            skillData.forEach((skill, index) => {
                const card = document.createElement('div');
                card.className = 'card fade-up';
                card.style.transitionDelay = `${index * 0.05}s`;
                card.innerHTML = `
                    <img src="${skill.image}" alt="${skill.title}">
                    <div class="card-body">
                        <span class="badge">${skill.category}</span>
                        <h3>${skill.title}</h3>
                        <p>${skill.desc}</p>
                        <a href="detail.html?id=${skill.id}" class="btn btn-outline">Review Specs</a>
                    </div>
                `;
                grid.appendChild(card);
            });
            observeElements(); 
        }
        const detailContent = document.getElementById('detail-content');
        if (detailContent) {
            const params = new URLSearchParams(window.location.search);
            const id = params.get('id');
            const skill = skillData.find(s => s.id === id);
            
            if (skill) {
                let tableRows = '';
                for (const [key, value] of Object.entries(skill.specs)) {
                    tableRows += `<tr><th>${key}</th><td>${value}</td></tr>`;
                }

               let listItems = '';
                skill.modules.forEach(module => {
                    listItems += `<li>${module}</li>`;
                });

                detailContent.innerHTML = `
                    <div class="detail-header fade-up">
                        <span class="badge">${skill.category}</span>
                        <h1>${skill.title}</h1>
                        <p style="color:var(--text-dim); font-size:1.1rem;">Instructor: <strong>${skill.instructor}</strong> | Duration: <strong>${skill.duration}</strong></p>
                    </div>

                    <!-- Video & Image Media Grid -->
                    <div class="media-grid fade-up" style="transition-delay: 0.1s">
                        <img src="${skill.image}" alt="${skill.title} Cover">
                        <video controls poster="${skill.image}">
                            <source src="asset/video.mp4" type="video/mp4">
                        </video>
                    </div>

                    <div class="audio-wrapper fade-up" style="transition-delay: 0.15s">
                        <p>Listen to Curriculum Intro</p>
                        <audio controls>
                            <source src="asset/audio.mp3" type="audio/ogg">
                        </audio>
                    </div>

                    <!-- Paragraph with Text Formatting -->
                    <div class="detail-content-text fade-up" style="transition-delay: 0.2s">
                        ${skill.content}
                    </div>

                    <!-- HTML Table for Specs -->
                    <div class="fade-up" style="transition-delay: 0.25s">
                        <table class="specs-table">
                            <tbody>
                                ${tableRows}
                            </tbody>
                        </table>
                    </div>

                    <!-- Unordered List for Syllabus -->
                    <div class="modules-box fade-up" style="transition-delay: 0.3s">
                        <h3>Curriculum Modules</h3>
                        <ul class="modules-list">
                            ${listItems}
                        </ul>
                    </div>
                `;
                observeElements();
            } else {
                detailContent.innerHTML = `<h2 style="text-align:center; padding: 100px;">Data not found</h2>`;
            }
        }
        
        const form = document.getElementById('enrollmentForm');
        if(form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                form.reset();
            });
        }
    } catch (err) {
        console.error("Error: Gagal render UI.", err);
    }
});
