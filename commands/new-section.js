const fs = require('fs');

function newSection(userInput) {
    const sectionName = userInput
    let liquidContent = 
    `
    <section id="${sectionName}-section">
        <div class="main-wrapper">
            <div class="title-container"><h2 class="title">{{section.settings.title}}</h2></div>
            <div class="content-wrapper">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi illo beatae, molestiae nostrum sed rem repudiandae iure quis. Dolore odio doloremque quod, voluptas laboriosam est.</div>
        </div>
    </section>
    `;

    fs.writeFile(`./sections/${sectionName}.liquid`, liquidContent, function (err) {
        if (err) throw err;
        console.log(`
        =====================================
        Created a new section
        Section name: "${sectionName}"
        =====================================`)
    });
}

module.exports = newSection