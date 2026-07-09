from pathlib import Path
import re
root = Path('.')
files = [*root.rglob('*.js'), *root.rglob('*.jsx'), *root.rglob('*.css'), *root.rglob('*.html')]
files = [f for f in files if 'node_modules' not in f.parts and 'dist' not in f.parts and 'build' not in f.parts]

def strip_js_comments(text):
    out = []
    i = 0
    state = 'normal'
    while i < len(text):
        c = text[i]
        if state == 'normal':
            if c == '"':
                out.append(c)
                state = 'double'
            elif c == "'":
                out.append(c)
                state = 'single'
            elif c == '`':
                out.append(c)
                state = 'template'
            elif c == '/' and i + 1 < len(text) and text[i + 1] == '/':
                i += 2
                state = 'line_comment'
                continue
            elif c == '/' and i + 1 < len(text) and text[i + 1] == '*':
                i += 2
                state = 'block_comment'
                continue
            else:
                out.append(c)
        elif state == 'line_comment':
            if c == '\n':
                out.append(c)
                state = 'normal'
        elif state == 'block_comment':
            if c == '*' and i + 1 < len(text) and text[i + 1] == '/':
                i += 2
                state = 'normal'
                continue
        elif state == 'double':
            out.append(c)
            if c == '\\' and i + 1 < len(text):
                out.append(text[i + 1])
                i += 1
            elif c == '"':
                state = 'normal'
        elif state == 'single':
            out.append(c)
            if c == '\\' and i + 1 < len(text):
                out.append(text[i + 1])
                i += 1
            elif c == "'":
                state = 'normal'
        elif state == 'template':
            out.append(c)
            if c == '\\' and i + 1 < len(text):
                out.append(text[i + 1])
                i += 1
            elif c == '`':
                state = 'normal'
        i += 1
    return ''.join(out)

def strip_css_comments(text):
    out = []
    i = 0
    state = 'normal'
    while i < len(text):
        c = text[i]
        if state == 'normal':
            if c == '/' and i + 1 < len(text) and text[i + 1] == '*':
                i += 2
                state = 'block_comment'
                continue
            else:
                out.append(c)
        elif state == 'block_comment':
            if c == '*' and i + 1 < len(text) and text[i + 1] == '/':
                i += 2
                state = 'normal'
                continue
        i += 1
    return ''.join(out)

def strip_html_comments(text):
    return re.sub(r'<!--.*?-->', '', text, flags=re.S)

for path in files:
    content = path.read_text(encoding='utf-8')
    if path.suffix in {'.js', '.jsx'}:
        new_content = strip_js_comments(content)
    elif path.suffix == '.css':
        new_content = strip_css_comments(content)
    else:
        new_content = strip_html_comments(content)
    if new_content != content:
        path.write_text(new_content, encoding='utf-8')
        print(f'Cleaned {path}')
