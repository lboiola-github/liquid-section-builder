const fs = require('fs');

function newSection(userInput) {
    const sectionName = userInput
    const capitalizedSection = sectionName.charAt(0).toUpperCase() + sectionName.slice(1);
    const liquidContent = 
    `
    <section id="${sectionName}-section">
        <div class="main-wrapper">
            <div class="title-container"><h2 class="title">{{section.settings.title}}</h2></div>
            <div class="content-wrapper">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi illo beatae, molestiae nostrum sed rem repudiandae iure quis. Dolore odio doloremque quod, voluptas laboriosam est.</div>
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
      "presets": [
        {
          "name": "${capitalizedSection} Section"
        }
      ]
    }
    {% endschema %}`;
    console.log(`You entered "${sectionName}" as section name`)
    fs.writeFile(`./sections/${sectionName}.liquid`, liquidContent, function (err) {
        if (err) throw err;
        console.log(`
        =====================================
        Created a new section with a basic schema
        Section name: "${sectionName}"
        =====================================`)
    });
}

module.exports = newSection