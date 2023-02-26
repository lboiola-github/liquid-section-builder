const fs = require('fs');

function newSection(userInput, numberOfSlides) {
    const sectionName = userInput
    const slides = numberOfSlides
    const capitalizedSection = sectionName.charAt(0).toUpperCase() + sectionName.slice(1);
    const liquidContent = 
    `
    <section id="${sectionName}-section">
        <div class="main-wrapper ${slides}-slides">
            <div class="title-container"><h2 class="title">{{section.settings.title}}</h2></div>
            <div class="content-wrapper">
                <div class="slider-container">
                    {% for block in section.blocks %}
                        <div class="slide-wrapper">   
                            <div class="slide-title">{{ block.settings.title }}</div>
                            <img 
                            src="{{ block.settings.slider-image | img_url: 'medium' }}" 
                            alt="{{ block.settings.title }}"
                            class="slide-image" 
                            loading="lazy" 
                            width="500" 
                            height="auto">
                        </div>
                    {% endfor %}
                </div>
            </div>
        </div>
    </section>
    
    {% schema %}
    {
        "name": "${capitalizedSection} Section",
        "class": "${sectionName}__wrapper",
        "settings": [
        {
            "type": "text",
            "id": "title",
            "label": "Title"
        }
        ],
        "blocks": [],
        "presets": [
        {
            "name": "${capitalizedSection} Section"
        }
        ]
    }
    {% endschema %}`;
    
    fs.writeFile(`./sections/${sectionName}.liquid`, liquidContent, function (err) {
        if (err) throw err;
        console.log(`
        =====================================
        Created a new section with a slider
        Section name: "${sectionName}"
        Number of slides: ${slides}
        =====================================`)
    });
}

module.exports = newSection
