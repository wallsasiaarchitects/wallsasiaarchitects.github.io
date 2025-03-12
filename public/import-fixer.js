
// This is a simple workaround for GitHub Pages MIME type issues
export function importAllModules() {
  // This will be replaced during build
  const script = document.createElement('script');
  script.type = 'module';
  script.src = './assets/index.js';
  document.head.appendChild(script);
}
