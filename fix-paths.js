
const fs = require('fs');
const path = require('path');

// Read the index.html file
const indexPath = path.join(__dirname, 'dist', 'index.html');
let indexContent = fs.readFileSync(indexPath, 'utf8');

// Find all script tags with type="module" and src starting with /
const moduleScriptRegex = /<script[^>]*type=["']module["'][^>]*src=["']\/[^"']*["'][^>]*><\/script>/g;
const scripts = indexContent.match(moduleScriptRegex) || [];

// Modify the paths in script tags
scripts.forEach(script => {
  const srcRegex = /src=["'](\/[^"']*)["']/;
  const srcMatch = script.match(srcRegex);
  if (srcMatch && srcMatch[1]) {
    const newSrc = srcMatch[1].replace(/^\//, './');
    const newScript = script.replace(srcRegex, `src="${newSrc}"`);
    indexContent = indexContent.replace(script, newScript);
  }
});

// Write the modified content back to index.html
fs.writeFileSync(indexPath, indexContent, 'utf8');

console.log('Paths fixed successfully!');
