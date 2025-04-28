document.addEventListener('DOMContentLoaded', () => {
    // Fetch all GitHub repositories for projects page
    if (window.location.pathname.includes('projects.html')) {
        fetchAllRepositories();
    }

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

async function fetchAllRepositories() {
    try {
        const response = await fetch('https://api.github.com/users/Shafiya0101/repos', {
            headers: {
                'Accept': 'application/vnd.github.v3+json'
            }
        });
        const repos = await response.json();

        if (!Array.isArray(repos) || repos.length === 0) {
            throw new Error('No repositories found');
        }

        // Filter out repositories named 'Shafiya0101' and 'github-portfolio'
        const filteredRepos = repos.filter(repo => 
            repo.name !== 'Shafiya0101' && repo.name !== 'github-portfolio'
        );

        const projectsGrid = document.getElementById('projects-grid');

        if (filteredRepos.length === 0) {
            projectsGrid.innerHTML = '<p class="text-gray-600 text-center col-span-full">No eligible projects found.</p>';
            return;
        }

        filteredRepos.forEach(repo => {
            const projectCard = document.createElement('div');
            projectCard.className = 'bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition';
            projectCard.innerHTML = `
                <h3 class="text-xl font-semibold text-gray-800 mb-2">${repo.name}</h3>
                <p class="text-gray-600 mb-4">${repo.description || 'No description available'}</p>
                <a href="${repo.html_url}" target="_blank" class="text-purple-600 hover:underline">View on GitHub</a>
            `;
            projectsGrid.appendChild(projectCard);
        });
    } catch (error) {
        console.error('Error fetching repositories:', error);
        document.getElementById('projects-grid').innerHTML = '<p class="text-red-600 text-center col-span-full">Unable to load projects at this time.</p>';
    }
}

// Animation classes
const style = document.createElement('style');
style.innerHTML = `
    .animate-fade-in {
        animation: fadeIn 1s ease-in;
    }
    .animate-slide-up {
        animation: slideUp 0.8s ease-out;
    }
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    @keyframes slideUp {
        from { transform: translateY(20px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
`;
document.head.appendChild(style);