#!/usr/bin/env python3
import re

with open('gapc2026.html', 'r', encoding='utf-8') as f:
    html = f.read()


def remove_block(html, open_tag_substr, close_tag):
    """Remove a block starting at open_tag_substr, tracking depth to find matching close_tag."""
    start = html.find(open_tag_substr)
    if start == -1:
        return html
    depth = 0
    i = start
    ot = open_tag_substr[:open_tag_substr.index(' ') if ' ' in open_tag_substr else len(open_tag_substr)]
    # find the actual open tag start
    while i < len(html):
        if html[i:].startswith(ot) and html[i + len(ot):i + len(ot) + 1] in ('>', ' ', '\n', '\t'):
            if html[i:].startswith(open_tag_substr):
                pass
            depth += 1
            end_of_open = html.index('>', i) + 1
            i = end_of_open
        elif html[i:].startswith(close_tag):
            depth -= 1
            i += len(close_tag)
            if depth == 0:
                return html[:start] + html[i:]
        else:
            i += 1
    return html


def remove_block_simple(html, start_marker, close_tag):
    """Remove from start_marker to matching close_tag by counting open/close tags."""
    pos = html.find(start_marker)
    if pos == -1:
        return html
    tag_name = re.match(r'<(\w+)', start_marker).group(1)
    open_re = re.compile(r'<' + tag_name + r'[\s>]')
    close_str = '</' + tag_name + '>'
    depth = 0
    i = pos
    while i < len(html):
        if open_re.match(html, i):
            depth += 1
            i = html.index('>', i) + 1
        elif html[i:i + len(close_str)] == close_str:
            depth -= 1
            i += len(close_str)
            if depth == 0:
                return html[:pos] + html[i:]
        else:
            i += 1
    return html


# 1. Remove <nav> block
html = remove_block_simple(html, '<nav ', '</nav>')

# 2. Remove filter dropdown (div class="dropdown")
filter_marker = '<div class="dropdown">'
html = remove_block_simple(html, filter_marker, '</div>')

# 3. Remove all <script> blocks
html = re.sub(r'<script\b[^>]*>.*?</script>', '', html, flags=re.DOTALL)

# 4. Strip <a href> tags (keep inner content)
html = re.sub(r'<a\b[^>]*>(.*?)</a>', r'\1', html, flags=re.DOTALL)

# 5. Fix flag image path
html = re.sub(r'src="/flags/4x3/nl\.svg[^"]*"', 'src="./gapc2026_files/nl.svg"', html)

# 6. Replace CSS/JS link tags with local paths, remove unneeded ones
# Remove all existing link/script asset refs and replace with our own
# Link tags can end with either /> or > (both are valid HTML)
link_end = r'/?>'
html = re.sub(r'<link rel="icon"[^>]*' + link_end, '', html)
html = re.sub(r'<link rel="stylesheet" href="/css/bootstrap\.min\.css[^"]*"[^>]*' + link_end, '', html)
html = re.sub(r'<link rel="stylesheet" href="/css/fontawesome-all\.min\.css[^"]*"[^>]*' + link_end, '', html)
html = re.sub(r'<link rel="stylesheet" href="/public/scoreboard-category-color\.css[^"]*"[^>]*' + link_end, '', html)
html = re.sub(r'<link[^>]+href="/style_domjudge\.css[^"]*"[^>]*' + link_end, '', html)
html = re.sub(r'<link[^>]+href="/style_jury\.css[^"]*"[^>]*' + link_end, '', html)
html = re.sub(r'<link rel="stylesheet" href="/css/dataTables\.[^"]*"[^>]*' + link_end, '', html)
html = re.sub(r'<link rel="icon"[^>]*' + link_end, '', html)
html = re.sub(r'<script src="[^"]*"[^>]*></script>', '', html)

# 7. Insert our CSS refs after <head>
css_block = '''    <link rel="stylesheet" href="./gapc2026_files/bootstrap.min.css">
    <link rel="stylesheet" href="./gapc2026_files/fontawesome-all.min.css">
    <link rel="stylesheet" href="./gapc2026_files/style_domjudge.css">'''
html = html.replace('<head>', '<head>\n' + css_block, 1)

# 8. Add class="static" to body (no navbar padding)
html = re.sub(r'<body([^>]*)>', r'<body\1 class="static">', html, count=1)

# 9. Make desktop scoreboard visible on all sizes (remove d-none)
html = html.replace(
    'class="d-none d-md-table scoreboard desktop-scoreboard',
    'class="scoreboard desktop-scoreboard'
)

# 9b. Strip score_pending — final standings, no submissions pending
html = re.sub(r'\bscore_pending\b\s*', '', html)

# 10. Remove the mobile scoreboard entirely (we show desktop on all sizes now)
html = remove_block_simple(html, '<table class="d-md-none scoreboard mobile-scoreboard', '</table>')

# 11. Clean up excessive whitespace lines (cosmetic)
html = re.sub(r'\n{4,}', '\n\n', html)

# 12. Fix title
html = re.sub(r'<title>.*?</title>', '<title>GAPC 2026 Final Standings</title>', html)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Done. index.html written.")
