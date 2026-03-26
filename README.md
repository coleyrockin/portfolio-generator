# Portfolio Generator

Node.js command-line tool that generates a polished HTML portfolio page from interactive prompts — powered by Inquirer.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## About

Portfolio Generator walks you through a series of terminal prompts to collect your name, bio, and project details, then outputs a clean, styled HTML portfolio page. It demonstrates Node.js file system operations, modular code architecture, and template-driven HTML generation — all from the command line.

## Features

- Interactive CLI questionnaire via Inquirer
- Supports multiple projects with descriptions and links
- Generates styled, responsive HTML output
- Modular source structure (page template, file I/O, prompts)
- No manual HTML editing required

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Runtime | Node.js |
| CLI | Inquirer |
| Output | Generated HTML / CSS |
| File I/O | Node.js `fs` module |

## Getting Started

### Prerequisites

- Node.js >= 14
- npm

### Installation

```bash
git clone https://github.com/coleyrockin/portfolio-generator.git
cd portfolio-generator
npm install
```

### Run

```bash
node app.js
```

Follow the prompts to enter your info — your generated portfolio will be saved to the `dist/` folder.

## Project Structure

```
├── dist/              # Generated output files
├── src/               # HTML template builder
├── utils/             # File I/O and prompt helpers
├── app.js             # Entry point
└── package.json
```

---

Built by [Boyd Roberts](https://github.com/coleyrockin)
