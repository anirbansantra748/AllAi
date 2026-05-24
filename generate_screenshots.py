import os
import subprocess
import json
from concurrent.futures import ThreadPoolExecutor

chrome_paths = [
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
    r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
    r"C:\Users\anirb\AppData\Local\Google\Chrome\Application\chrome.exe"
]

chrome_path = None
for p in chrome_paths:
    if os.path.exists(p):
        chrome_path = p
        break

if not chrome_path:
    print("Google Chrome not found in standard paths!")
    exit(1)

output_dir = r"c:\Users\anirb\Downloads\my-folder\AllAi\public\screenshots"
os.makedirs(output_dir, exist_ok=True)

def take_screenshot(template_id):
    output_file = os.path.join(output_dir, f"{template_id}.png")
    if os.path.exists(output_file):
        # Already exists, skip
        return "skipped"
    
    # We will use headless chrome to take a screenshot
    # --virtual-time-budget=1000 lets animations settle for 1 second
    cmd = [
        chrome_path,
        "--headless",
        "--disable-gpu",
        "--window-size=1280,800",
        "--hide-scrollbars",
        f"--screenshot={output_file}",
        f"http://localhost:5173/{template_id}?embed=true"
    ]
    
    try:
        # Run process
        result = subprocess.run(cmd, capture_output=True, timeout=15)
        if os.path.exists(output_file):
            print(f"[OK] Template {template_id} screenshot captured.")
            return "captured"
        else:
            print(f"[FAIL] Template {template_id} failed to capture.")
            return "failed"
    except Exception as e:
        print(f"[Error] Template {template_id} error: {e}")
        return "error"

# Load template IDs from templates_metadata.json
metadata_path = r"c:\Users\anirb\Downloads\my-folder\AllAi\templates_metadata.json"
with open(metadata_path, "r", encoding="utf-8") as f:
    metadata = json.load(f)

template_ids = [item["id"] for item in metadata]

print(f"Starting parallel screenshot generation using Google Chrome headless...")
print(f"Output directory: {output_dir}")
print(f"Total templates in metadata: {len(template_ids)}")

# We run with 6 parallel workers to not overload the system
with ThreadPoolExecutor(max_workers=6) as executor:
    results = list(executor.map(take_screenshot, template_ids))

skipped_count = sum(1 for r in results if r == "skipped")
captured_count = sum(1 for r in results if r == "captured")
failed_count = sum(1 for r in results if r in ["failed", "error"])

print(f"\nScreenshot generation completed!")
print(f"  Skipped (already exists): {skipped_count}")
print(f"  Newly captured: {captured_count}")
print(f"  Failed: {failed_count}")
