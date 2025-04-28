const projects = [
    {
        image: "images/NN Classifier.png",
        title: "Building-a-NN-Classifier",
        description: "A comparative implementation of Fully-Connected and Convolutional Neural Networks for classifying dandelions and grass plants using the CIFAR dataset, featuring performance evaluation through accuracy metrics, ROC-AUC analysis, and visualization tools.", // Placeholder for your description
        githubLink: "https://github.com/Shafiya0101/Building-a-NN-Classifier" // Replace with actual GitHub link
    },
    {
        image: "images/YOLOv5.png",
        title: "Chess-Pieces-Detection-YOLO-V5",
        description: "A comprehensive YOLOv5-based computer vision project for detecting and classifying chess pieces (both black and white) on a chessboard, featuring complete training workflow, model deployment, and video inference capabilities.", // Placeholder for your description
        githubLink: "https://github.com/Shafiya0101/Chess_Pieces_Detection--YOLO-v5" // Replace with actual GitHub link
    },
    {
        image: "images/Encoder-Decoder.png",
        title: "Convolutional-AutoEncoder-for-Cifar-dataset",
        description: "A Convolutional AutoEncoder implementation for efficient image compression on the CIFAR-100 dataset, achieving 83.33% compression rate while maintaining good reconstruction quality with an average PSNR of 23.65 dB.", // Placeholder for your description
        githubLink: "https://github.com/Shafiya0101/Convolutional-AutoEncoder-for-Cifar-dataset" // Replace with actual GitHub link
    },
    {
        image: "images/Ecommerce.png",
        title: "E-commerce-Dashboard",
        description: "A comprehensive e-commerce analytics dashboard displaying key metrics including total revenue ($106M), customer data (113K), product performance, and sales trends from 2015-2021, with interactive filters for deeper business insights.", // Placeholder for your description
        githubLink: "https://github.com/Shafiya0101/E-commerce-Dashboard-" // Replace with actual GitHub link
    },
    {
        image: "images/Deployment.png",
        title: "PGE4-Test-Deployment",
        description: "A test deployment project demonstrating how to host a simple static website using GitHub Pages, featuring basic HTML, CSS, and JavaScript with minimal setup requirements for learning web deployment.", // Placeholder for your description
        githubLink: "https://github.com/Shafiya0101/PGE4-Test-Deployment" // Replace with actual GitHub link
    },
    {
        image: "images/Resume Extractor.png",
        title: "Resume-Extractor",
        description: "A Flask-based web application that analyzes resumes for AI school admissions by extracting text from uploaded documents and evaluating candidates based on their academic level using Mistral AI, providing personalized scores and detailed reasoning.", // Placeholder for your description
        githubLink: "#" // Replace with actual GitHub link
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // Populate projects
    const projectsGrid = document.getElementById("projects-grid");
    projects.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.className = "bg-white text-gray-800 rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105";
        
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover rounded-t-lg mb-4">
            <h3 class="text-lg font-semibold mb-2">${project.title}</h3>
            <p class="text-gray-600 mb-4">${project.description}</p>
            <a href="${project.githubLink}" class="text-purple-600 hover:underline text-sm">
                View on GitHub
            </a>
        `;
        
        projectsGrid.appendChild(projectCard);
    });

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