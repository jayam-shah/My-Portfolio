particlesJS("background",{

    particles: {
        number: {
            value: 15, // Number of particles (counts)
            density: {
                enable: true, 
                value_area: 300, //area in which particles are distributed
            }, 
        },

        color:{
            value: "#ffffff", // Color of particles
        },
        shape:{
            type: "triangle", // Shape of particles
        },
        opacity: {
            value: 0.8, // Opacity of particles
            random: true, // Random opacity
            anim: {
                enable: true, // Animation for opacity
                speed: 1,
                opacity_min: 0.1,
                sync: false
            },
        },

        size: {
            value: 7, // Size of particles
            random: true, // Random size
            anim: {
                enable: true, // Animation for size
                speed: 4,
                size_min: 0.3,
                sync: false
            },
        },

        // Line linking particles

        line_linked: {
            enable: true, // Enable linking
            distance: 150, // Distance for linking
            color: "#ffffff", // Color of links
            opacity: 0.4, // Opacity of links
            width: 1, // Width of links
        },

    }

})