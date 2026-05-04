const assert = require('assert');
const generatePage = require('../src/page-template');

const html = generatePage({
  name: '<img src=x onerror=alert(1)>',
  github: 'bad-user" onclick="alert(1)',
  about: 'About <script>alert(1)</script> & "quotes"',
  projects: [
    {
      name: 'Featured <b>Project</b>',
      description: 'Description <img src=x onerror=alert(1)>',
      languages: ['JavaScript', '<script>alert(1)</script>'],
      link: 'javascript:alert(1)',
      feature: true
    },
    {
      name: 'Safe Project',
      description: 'A safe project',
      languages: ['Node'],
      link: 'https://example.com/project?x=1',
      feature: false
    }
  ]
});

assert(!html.includes('<script>alert(1)</script>'));
assert(!html.includes('<img src=x onerror=alert(1)>'));
assert(!html.includes('<b>Project</b>'));
assert(!html.includes('javascript:alert(1)'));
assert(!html.includes('onclick='));
assert(!html.includes('cdnjs.cloudflare.com'));
assert(!html.includes('fonts.googleapis.com'));
assert(html.includes('&lt;script&gt;alert(1)&lt;/script&gt;'));
assert(html.includes('&lt;img src=x onerror=alert(1)&gt;'));
assert(html.includes('href="#"'));
assert(html.includes('href="https://example.com/project?x=1"'));
assert(html.includes('href="#" rel="noopener noreferrer">GitHub</a>'));
