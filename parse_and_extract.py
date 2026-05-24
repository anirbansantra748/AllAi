import os
import re
import json

src_dir = r"c:\Users\anirb\Downloads\my-folder\AllAi"
output_dir = os.path.join(src_dir, "extracted_templates")
os.makedirs(output_dir, exist_ok=True)

files = ["a.md", "b.md", "c.md", "d.md", "e.md", "f.md", "g.md", "h.md", "i.md"]

metadata = []

# Clean up files in output_dir first if any
for f in os.listdir(output_dir):
    os.remove(os.path.join(output_dir, f))

for fn in files:
    path = os.path.join(src_dir, fn)
    if not os.path.exists(path):
        continue
        
    print(f"Parsing {fn}...")
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
        
    lines = content.splitlines()
    
    blocks = []
    current_block = []
    
    for idx, line in enumerate(lines):
        is_new_block = False
        
        # Check doctype
        if "<!DOCTYPE" in line or "<!doctype" in line:
            is_new_block = True
            
        # Check React import
        elif re.match(r'^(?:\d+\s+)?import\s+React', line.strip()) or re.match(r'^import\s+React', line.strip()):
            is_new_block = True
            
        if is_new_block and current_block:
            blocks.append(current_block)
            current_block = []
            
        current_block.append(line)
        
    if current_block:
        blocks.append(current_block)
        
    print(f"Found {len(blocks)} blocks in {fn}")
    
    for b_idx, block in enumerate(blocks):
        block_content = "\n".join(block)
        
        is_html = "<!DOCTYPE" in block_content or "<!doctype" in block_content
        block_type = "html" if is_html else "react"
        
        # Find Title
        title = ""
        if is_html:
            title_match = re.search(r'<title>(.*?)</title>', block_content, re.IGNORECASE)
            if title_match:
                title = title_match.group(1).strip()
            else:
                title = f"HTML App {b_idx + 1} from {fn.upper()}"
        else:
            # Look for a comment on first few lines or inside the file
            # E.g. // Title: or title from comments
            title_match = re.search(r'//\s*Title:\s*(.*)', block_content, re.IGNORECASE)
            if title_match:
                title = title_match.group(1).strip()
            else:
                # Let's search for the first <h1> or title in component
                # Or look at the first few lines for a title in comment
                comment_match = re.search(r'/\*\*\s*(.*?)\s*\*/', block_content, re.DOTALL)
                if comment_match:
                    first_comment = comment_match.group(1)
                    first_line = first_comment.split("\n")[0].strip()
                    title = first_line.strip("* ")
                
                if not title:
                    # Let's see if we can find a title from standard headers
                    # Like h1, h2 or a descriptive comment
                    title = f"React App {b_idx + 1} from {fn.upper()}"
        
        # Determine theme and category
        # Let's analyze keywords in the code to categorize
        # e.g., light-theme, dark-theme, neomorphism, glassmorphism, modern, retro, minimalist, corporate, AI
        content_lower = block_content.lower()
        
        theme = "light"
        if "bg-zinc-950" in content_lower or "bg-slate-950" in content_lower or "bg-stone-950" in content_lower or "bg-gray-950" in content_lower or "bg-black" in content_lower or "bg-[#0a0" in content_lower or "bg-[#1" in content_lower or "bg-neutral-950" in content_lower or "dark" in content_lower:
            # Let's do a more robust count
            dark_keywords = ["bg-zinc-950", "bg-slate-950", "bg-stone-950", "bg-gray-950", "bg-black", "dark-theme", "text-white"]
            dark_score = sum(content_lower.count(k) for k in dark_keywords)
            light_keywords = ["bg-white", "bg-stone-100", "bg-slate-100", "bg-gray-100", "bg-zinc-100", "bg-neutral-100", "light-theme", "text-black", "text-zinc-900"]
            light_score = sum(content_lower.count(k) for k in light_keywords)
            if dark_score > light_score or "bg-black" in content_lower or "bg-slate-950" in content_lower or "bg-zinc-950" in content_lower:
                theme = "dark"
        
        style = "modern"
        if "glass" in content_lower or "backdrop-blur" in content_lower:
            style = "glassmorphism"
        elif "neo" in content_lower or "shadow-[" in content_lower:
            style = "neomorphism"
        elif "retro" in content_lower or "font-mono" in content_lower or "pixel" in content_lower:
            style = "retro"
        elif "minimal" in content_lower or "border-zinc" in content_lower or "border-slate" in content_lower:
            style = "minimalist"
            
        category = "AI Tool"
        if "portfolio" in content_lower:
            category = "Portfolio"
        elif "landing" in content_lower or "hero" in content_lower:
            category = "Landing Page"
        elif "dash" in content_lower or "chart" in content_lower or "stats" in content_lower:
            category = "Dashboard"
        elif "game" in content_lower or "play" in content_lower:
            category = "Interactive / Game"
        elif "saas" in content_lower or "pricing" in content_lower:
            category = "SaaS Product"
            
        # Clean title from any non-ascii or unicode encoding issues
        title_clean = title.encode('ascii', errors='ignore').decode('ascii').strip()
        if not title_clean:
            title_clean = f"Template {b_idx+1} from {fn.upper()}"
            
        safe_fn = fn.replace(".md", "")
        block_filename = f"{safe_fn}_temp_{b_idx+1}.{'html' if is_html else 'jsx'}"
        block_path = os.path.join(output_dir, block_filename)
        
        # Write template file
        with open(block_path, "w", encoding="utf-8") as out_f:
            out_f.write(block_content)
            
        metadata.append({
            "id": len(metadata) + 1,
            "source_file": fn,
            "block_index": b_idx + 1,
            "type": block_type,
            "filename": block_filename,
            "title": title_clean,
            "theme": theme,
            "style": style,
            "category": category,
            "lines": len(block)
        })

# Write metadata JSON
with open(os.path.join(src_dir, "templates_metadata.json"), "w", encoding="utf-8") as meta_f:
    json.dump(metadata, meta_f, indent=2)

print(f"Successfully processed all templates! Total extracted: {len(metadata)}")
