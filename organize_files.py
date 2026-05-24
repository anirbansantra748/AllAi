import os
import shutil
import json

src_dir = r"c:\Users\anirb\Downloads\my-folder\AllAi"
extracted_dir = os.path.join(src_dir, "extracted_templates")
templates_metadata_path = os.path.join(src_dir, "templates_metadata.json")

# Define target directories
public_templates_dir = os.path.join(src_dir, "public", "templates")
src_templates_dir = os.path.join(src_dir, "src", "templates")

os.makedirs(public_templates_dir, exist_ok=True)
os.makedirs(src_templates_dir, exist_ok=True)

# Read metadata
with open(templates_metadata_path, "r", encoding="utf-8") as f:
    metadata = json.load(f)

react_mappings = []

for item in metadata:
    old_filename = item["filename"]
    src_file_path = os.path.join(extracted_dir, old_filename)
    
    if not os.path.exists(src_file_path):
        print(f"File {old_filename} not found in extracted_templates!")
        continue
        
    # Copy ALL files (both HTML and React) to public/templates so they are downloadable/fetchable
    dest_public_path = os.path.join(public_templates_dir, old_filename)
    shutil.copy2(src_file_path, dest_public_path)
    
    if item["type"] == "html":
        pass
    else:
        # Copy to src/templates for bundling
        dest_src_path = os.path.join(src_templates_dir, old_filename)
        shutil.copy2(src_file_path, dest_src_path)
        
        # Prepare import mapping
        react_mappings.append(f"  {item['id']}: lazy(() => import('./{old_filename}')),")

# Generate src/templates/registry.jsx
registry_content = f"""import {{ lazy }} from 'react';

export const reactTemplates = {{
{chr(10).join(react_mappings)}
}};
"""

with open(os.path.join(src_templates_dir, "registry.jsx"), "w", encoding="utf-8") as reg_f:
    reg_f.write(registry_content)

# Copy templates_metadata.json to public/ templates_metadata.json
shutil.copy2(templates_metadata_path, os.path.join(src_dir, "public", "templates_metadata.json"))

print("Files organized successfully! Copies written to both src/ and public/.")
print(f"Total templates in public/templates: {len(metadata)}")
print(f"React templates in src/templates: {len(react_mappings)}")
print("src/templates/registry.jsx generated.")
