"""
Split src/templates/new2_temp_7.jsx (which actually contains 5 templates) into
proper template files.

Structure based on grep:
- Lines 1-1104: HTML Template (Stratos Conqueror) - already wrong, has prefix line
- Line 1105 'II' separator
- Lines 1106-2151: HTML Template
- Line 2152 'I2' separator
- Lines 2153-3605: HTML Template
- Line 3606 'I3' separator
- Lines 3607-5262: React Template (the proper one for ID 118)
- Line 5263 'I4' separator
- Lines 5264-end: HTML Template

Plan:
- Replace src/templates/new2_temp_7.jsx with ONLY the React portion (lines 3607-5262)
- Save the 4 HTML templates as new templates 119, 120, 121, 122 in public/templates/
- Update metadata + registry
"""
import os, json

src = 'src/templates/new2_temp_7.jsx'
with open(src, 'r', encoding='utf-8') as f:
    text = f.read()

# Split by separators
# We need to be careful — separators like "II", "I2", "I3", "I4" appear at start of line
import re
# Find positions of separator lines
separators = []
lines = text.split('\n')
for i, line in enumerate(lines):
    s = line.strip()
    if s in ('II', 'I2', 'I3', 'I4'):
        separators.append((i, s))

print(f"Found separators: {separators}")

# Build segments
segments = []
prev = 0
for idx, sep_name in separators:
    # Lines from prev to idx-1 (exclusive of separator)
    segments.append('\n'.join(lines[prev:idx]))
    prev = idx + 1
# Add final segment
segments.append('\n'.join(lines[prev:]))

print(f"Got {len(segments)} segments")
for i, s in enumerate(segments):
    print(f"  Segment {i}: {len(s)} chars, starts with: {s[:60]!r}")

# Strip the leading ":Stratos Conqueror Landing Page:index.html" line from segment 0
seg0 = segments[0]
if seg0.startswith(':'):
    # Remove first line
    seg0 = seg0.split('\n', 1)[1]
segments[0] = seg0

# Write each HTML segment to public/templates/
# Segment 0 = HTML 1 (becomes new2_temp_8.html / id 119)
# Segment 1 = HTML 2 (becomes new2_temp_9.html / id 120)
# Segment 2 = HTML 3 (becomes new2_temp_10.html / id 121)
# Segment 3 = React (becomes new2_temp_7.jsx replacement / id 118)
# Segment 4 = HTML 4 (becomes new2_temp_11.html / id 122)

# Write the React component to fix new2_temp_7.jsx
react_code = segments[3].strip()
with open('src/templates/new2_temp_7.jsx', 'w', encoding='utf-8') as f:
    f.write(react_code + '\n')
print(f"Fixed new2_temp_7.jsx: {len(react_code)} chars")

# Write 4 HTML templates
html_segments = [segments[0], segments[1], segments[2], segments[4]]
for i, html in enumerate(html_segments, start=8):
    fn = f'new2_temp_{i}.html'
    with open(f'public/templates/{fn}', 'w', encoding='utf-8') as f:
        f.write(html.strip() + '\n')
    print(f"Wrote {fn}: {len(html)} chars")

# Update metadata
with open('public/templates_metadata.json', 'r', encoding='utf-8') as f:
    metadata = json.load(f)

# Find templates 105-118 and append new ones
# Update template 118's line count for new react size
react_lines = react_code.count('\n') + 1
for entry in metadata:
    if entry['id'] == 118:
        entry['lines'] = react_lines
        entry['title'] = 'Audio Premium - Stratos Headphones Configurator'
        break

# Append new HTML templates as IDs 119-122
new_entries = [
    {
        'id': 119,
        'source_file': 'new2.txt',
        'block_index': 8,
        'type': 'html',
        'filename': 'new2_temp_8.html',
        'title': 'STRATOS CONQUEROR - Near-Space Exploration',
        'theme': 'dark',
        'style': 'glassmorphism',
        'category': 'Landing Page',
        'lines': html_segments[0].count('\n') + 1,
    },
    {
        'id': 120,
        'source_file': 'new2.txt',
        'block_index': 9,
        'type': 'html',
        'filename': 'new2_temp_9.html',
        'title': 'Premium HTML Template 9 from NEW2',
        'theme': 'dark',
        'style': 'glassmorphism',
        'category': 'Landing Page',
        'lines': html_segments[1].count('\n') + 1,
    },
    {
        'id': 121,
        'source_file': 'new2.txt',
        'block_index': 10,
        'type': 'html',
        'filename': 'new2_temp_10.html',
        'title': 'Premium HTML Template 10 from NEW2',
        'theme': 'dark',
        'style': 'glassmorphism',
        'category': 'Landing Page',
        'lines': html_segments[2].count('\n') + 1,
    },
    {
        'id': 122,
        'source_file': 'new2.txt',
        'block_index': 11,
        'type': 'html',
        'filename': 'new2_temp_11.html',
        'title': 'Premium HTML Template 11 from NEW2',
        'theme': 'dark',
        'style': 'glassmorphism',
        'category': 'Landing Page',
        'lines': html_segments[3].count('\n') + 1,
    },
]
# Don't double-add
existing_ids = {e['id'] for e in metadata}
for ne in new_entries:
    if ne['id'] not in existing_ids:
        metadata.append(ne)

with open('public/templates_metadata.json', 'w', encoding='utf-8') as f:
    json.dump(metadata, f, indent=2)

# Sync to root
import shutil
shutil.copy2('public/templates_metadata.json', 'templates_metadata.json')

print("\nDone! Updated metadata. Total templates:", len(metadata))
