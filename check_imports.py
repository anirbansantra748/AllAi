import os
import re

extracted_dir = r"c:\Users\anirb\Downloads\my-folder\AllAi\extracted_templates"
jsx_files = [f for f in os.listdir(extracted_dir) if f.endswith(".jsx")]

imports = set()

for fn in jsx_files:
    path = os.path.join(extracted_dir, fn)
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Find lines starting with import
    for line in content.splitlines():
        if line.strip().startswith("import "):
            # Find the package imported from (e.g., from 'package' or from "package")
            match = re.search(r'from\s+[\'"]([^\'\"]+)[\'"]', line)
            if match:
                imports.add(match.group(1))

print("All unique import sources in React files:")
for imp in sorted(list(imports)):
    print(f"  {imp}")
