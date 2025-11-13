        // === JavaScript Logic for 3D (Three.js) and Interactivity ===

        let scene, camera, renderer, particles, particleCount = 1000;
        let mouseX = 0, mouseY = 0;
        const windowHalfX = window.innerWidth / 2;
        const windowHalfY = window.innerHeight / 2;
        const container = document.getElementById('webgl-container');

        // Function to initialize the 3D scene
        function initThreeJS() {
            // 1. Scene & Camera
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 5;

            // 2. Renderer
            renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setClearColor(0x0f172a, 0); 
            container.appendChild(renderer.domElement);

            // 3. Particles (as an abstract background)
            const geometry = new THREE.BufferGeometry();
            const positions = [];
            const colors = [];
            const color = new THREE.Color();

            // Create scattered particles
            for (let i = 0; i < particleCount; i++) {
                positions.push(Math.random() * 200 - 100);
                positions.push(Math.random() * 200 - 100);
                positions.push(Math.random() * 200 - 100);

                color.setHSL(Math.random() * 0.1 + 0.5, 1.0, 0.5); 
                colors.push(color.r, color.g, color.b);
            }

            geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
            geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

            const material = new THREE.PointsMaterial({
                size: 0.2,
                vertexColors: true,
                transparent: true,
                opacity: 0.8,
                blending: THREE.AdditiveBlending 
            });

            particles = new THREE.Points(geometry, material);
            scene.add(particles);

            // 4. Listeners for Interaction & Responsiveness
            document.addEventListener('mousemove', onDocumentMouseMove);
            window.addEventListener('resize', onWindowResize);
        }

        // Function to adjust canvas size when window is resized
        function onWindowResize() {
            const width = window.innerWidth;
            const height = window.innerHeight;

            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        }

        // Parallax Function (Moving Camera based on Mouse)
        function onDocumentMouseMove(event) {
            mouseX = (event.clientX - windowHalfX) * 0.005;
            mouseY = (event.clientY - windowHalfY) * 0.005;
        }

        // Animation Function (Render Loop)
        function animate() {
            requestAnimationFrame(animate);

            // 1. Parallax Effect (Smoothly moving the camera)
            camera.position.x += (mouseX - camera.position.x) * 0.05;
            camera.position.y += (-mouseY - camera.position.y) * 0.05;
            camera.lookAt(scene.position); 

            // 2. Particle Rotation (giving a sense of background movement)
            particles.rotation.y += 0.0005;
            particles.rotation.x += 0.0001;

            renderer.render(scene, camera);
        }

        // === JavaScript Logic for HTML Interactivity (Typing Effect) ===
        
        // Data for text animation (TRANSLATED)
        const heroHeadings = ['SOFTWARE ENGINEER', 'THREE.JS DEVELOPER', 'UNITY DEVELOPER'];
        const roleTitles = ['Software Engineer', 'Three.js Developer', 'Unity Specialist'];
        
        let heroIndex = 0;
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        
        const heroEl = document.getElementById('dynamic-hero-heading');
        const roleEl = document.getElementById('dynamic-role-title');

        // Main function for typing effect
        function typeEffect() {
            const currentHeroText = heroHeadings[heroIndex];
            const currentRoleText = roleTitles[roleIndex];
            
            // Logic for Hero Heading
            if (!isDeleting) {
                // Typing forward
                heroEl.textContent = currentHeroText.substring(0, charIndex + 1);
                roleEl.textContent = currentRoleText.substring(0, charIndex + 1);
                charIndex++;
            } else {
                // Deleting
                heroEl.textContent = currentHeroText.substring(0, charIndex - 1);
                roleEl.textContent = currentRoleText.substring(0, charIndex - 1);
                charIndex--;
            }

            let typingSpeed = 100;

            if (isDeleting) {
                typingSpeed /= 2; // Delete faster
            }

            if (!isDeleting && charIndex === currentHeroText.length) {
                // Done typing, wait a moment then start deleting
                typingSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                // Done deleting, switch to the next text
                isDeleting = false;
                
                // Move to the next index for Hero and Role
                heroIndex = (heroIndex + 1) % heroHeadings.length;
                roleIndex = (roleIndex + 1) % roleTitles.length;
                
                typingSpeed = 500; // Pause briefly before starting to type again
            }

            setTimeout(typeEffect, typingSpeed);
        }


        // 4. Initialize Three.js and Text Animation after window loads
        window.onload = function() {
            try {
                initThreeJS();
                animate();
                typeEffect(); // Start typing effect
            } catch (error) {
                console.error("Failed to load Three.js:", error);
                // Fallback: If Three.js fails, ensure HTML content is visible
                container.style.opacity = 0; 
                document.body.style.backgroundColor = '#0f172a';
            }
        };

        // 5. Mobile Menu Toggle
        document.getElementById('mobile-menu-button').addEventListener('click', function() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        });

        // 6. Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
                // Hide mobile menu after click
                document.getElementById('mobile-menu').classList.add('hidden');
            });
        });
