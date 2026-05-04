const escapeHTML = value => {
  return String(value || '').replace(/[&<>"']/g, char => {
    return {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[char];
  });
};

const sanitizeProjectUrl = value => {
  try {
    const url = new URL(String(value || '').trim());
    return ['http:', 'https:'].includes(url.protocol) ? url.href : '#';
  } catch (err) {
    return '#';
  }
};

const generateGitHubUrl = username => {
  const normalizedUsername = String(username || '').trim();
  return /^[a-z\d](?:[a-z\d-]{0,37}[a-z\d])?$/i.test(normalizedUsername)
    ? `https://github.com/${normalizedUsername}`
    : '#';
};

const generateLanguageList = languages => {
  if (!Array.isArray(languages)) {
    return '';
  }

  return languages.map(language => escapeHTML(language)).join(', ');
};

// create the about section
const generateAbout = aboutText => {
  if (!aboutText) {
    return '';
  }

  return `
    <section class="my-3" id="about">
      <h2 class="text-dark bg-primary p-2 display-inline-block">About Me</h2>
      <p>${escapeHTML(aboutText)}</p>
    </section>
  `;
};

// create the projects section
const generateProjects = projectsArr => {
  return `
    <section class="my-3" id="portfolio">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
      <div class="flex-row justify-space-between">
      ${projectsArr
        .filter(({ feature }) => feature)
        .map(({ name, description, languages, link }) => {
          return `
          <div class="col-12 mb-2 bg-dark text-light p-3">
            <h3 class="portfolio-item-title text-light">${escapeHTML(name)}</h3>
            <h5 class="portfolio-languages">
              Built With:
              ${generateLanguageList(languages)}
            </h5>
            <p>${escapeHTML(description)}</p>
            <a href="${sanitizeProjectUrl(link)}" class="btn" rel="noopener noreferrer">View Project on GitHub</a>
          </div>
        `;
        })
        .join('')}

      ${projectsArr
        .filter(({ feature }) => !feature)
        .map(({ name, description, languages, link }) => {
          return `
          <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
            <h3 class="portfolio-item-title text-light">${escapeHTML(name)}</h3>
            <h5 class="portfolio-languages">
              Built With:
              ${generateLanguageList(languages)}
            </h5>
            <p>${escapeHTML(description)}</p>
            <a href="${sanitizeProjectUrl(link)}" class="btn mt-auto" rel="noopener noreferrer">View Project on GitHub</a>
          </div>
        `;
        })
        .join('')}
    
      </div>
    </section>
  `;
};

// export function to generate entire page
module.exports = templateData => {
  // destructure page data by section
  const { projects, about, ...header } = templateData;

  return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
    <link rel="stylesheet" href="style.css">
  </head>
  
  <body>
    <header>
      <div class="container flex-row justify-space-between align-center py-3">
        <h1 class="page-title text-secondary bg-dark py-2 px-3">${escapeHTML(header.name)}</h1>
        <nav class="flex-row">
          <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="${generateGitHubUrl(header.github)}" rel="noopener noreferrer">GitHub</a>
        </nav>
      </div>
    </header>
    <main class="container my-5">
      ${generateAbout(about)}
      ${generateProjects(projects)}
    </main>
    <footer class="container text-center py-3">
      <h3 class="text-dark">&copy;2020 by ${escapeHTML(header.name)}</h3>
    </footer>
  </body>
  </html>
  `;
};
