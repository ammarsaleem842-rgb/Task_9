const fs = require('fs').promises;
const path = require('path');
const { promisify } = require('util');
const { exec } = require('child_process');
const execAsync = promisify(exec);

async function findFiles(rootDir) {
    const extensions = ['.js', '.jsx', '.css', '.html'];
    const excludeDirs = ['node_modules', 'dist', 'build'];
    const files = [];
    
    async function walkDir(currentPath) {
        const entries = await fs.readdir(currentPath, { withFileTypes: true });
        for (const entry of entries) {
            const fullPath = path.join(currentPath, entry.name);
            if (entry.isDirectory()) {
                if (!excludeDirs.includes(entry.name)) {
                    await walkDir(fullPath);
                }
            } else {
                const ext = path.extname(entry.name);
                if (extensions.includes(ext)) {
                    files.push(fullPath);
                }
            }
        }
    }
    
    await walkDir(rootDir);
    return files;
}

function stripJsComments(text) {
    const out = [];
    let i = 0;
    let state = 'normal';
    
    while (i < text.length) {
        const c = text[i];
        
        switch (state) {
            case 'normal':
                if (c === '"') {
                    out.push(c);
                    state = 'double';
                } else if (c === "'") {
                    out.push(c);
                    state = 'single';
                } else if (c === '`') {
                    out.push(c);
                    state = 'template';
                } else if (c === '/' && i + 1 < text.length && text[i + 1] === '/') {
                    i += 2;
                    state = 'line_comment';
                    continue;
                } else if (c === '/' && i + 1 < text.length && text[i + 1] === '*') {
                    i += 2;
                    state = 'block_comment';
                    continue;
                } else {
                    out.push(c);
                }
                break;
                
            case 'line_comment':
                if (c === '\n') {
                    out.push(c);
                    state = 'normal';
                }
                break;
                
            case 'block_comment':
                if (c === '*' && i + 1 < text.length && text[i + 1] === '/') {
                    i += 2;
                    state = 'normal';
                    continue;
                }
                break;
                
            case 'double':
                out.push(c);
                if (c === '\\' && i + 1 < text.length) {
                    out.push(text[i + 1]);
                    i += 1;
                } else if (c === '"') {
                    state = 'normal';
                }
                break;
                
            case 'single':
                out.push(c);
                if (c === '\\' && i + 1 < text.length) {
                    out.push(text[i + 1]);
                    i += 1;
                } else if (c === "'") {
                    state = 'normal';
                }
                break;
                
            case 'template':
                out.push(c);
                if (c === '\\' && i + 1 < text.length) {
                    out.push(text[i + 1]);
                    i += 1;
                } else if (c === '`') {
                    state = 'normal';
                }
                break;
        }
        
        i += 1;
    }
    
    return out.join('');
}

function stripCssComments(text) {
    const out = [];
    let i = 0;
    let state = 'normal';
    
    while (i < text.length) {
        const c = text[i];
        
        switch (state) {
            case 'normal':
                if (c === '/' && i + 1 < text.length && text[i + 1] === '*') {
                    i += 2;
                    state = 'block_comment';
                    continue;
                } else {
                    out.push(c);
                }
                break;
                
            case 'block_comment':
                if (c === '*' && i + 1 < text.length && text[i + 1] === '/') {
                    i += 2;
                    state = 'normal';
                    continue;
                }
                break;
        }
        
        i += 1;
    }
    
    return out.join('');
}

function stripHtmlComments(text) {
    return text.replace(/<!--[\s\S]*?-->/g, '');
}

async function processFiles() {
    const rootDir = process.cwd();
    const files = await findFiles(rootDir);
    
    console.log(`Found ${files.length} files to process`);
    
    for (const filePath of files) {
        const content = await fs.readFile(filePath, 'utf-8');
        let newContent;
        
        if (filePath.endsWith('.js') || filePath.endsWith('.jsx')) {
            newContent = stripJsComments(content);
        } else if (filePath.endsWith('.css')) {
            newContent = stripCssComments(content);
        } else {
            newContent = stripHtmlComments(content);
        }
        
        if (newContent !== content) {
            await fs.writeFile(filePath, newContent, 'utf-8');
            console.log(`Cleaned ${filePath}`);
        }
    }
    
    console.log('Comment removal completed!');
}

processFiles().catch(err => {
    console.error('Error:', err);
    process.exit(1);
});