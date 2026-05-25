"""
Generate screenshots only for the new templates (IDs 105-118).
Uses Chrome headless. Requires the Vite dev server to be running on port 5173.
"""
import os
import subprocess
import json
import time
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

print(f"Using Chrome at: {chrome_path}")

output_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), "public", "screenshots")
os.makedirs(output_dir, exist_ok=True)

# Only new templates
NEW_IDS = list(range(105, 119))  # 105..118 inclusive

def take_screenshot(template_id):
    output_file = os.path.join(output_dir, f"{template_id}.png")
    # Force regenerate even if exists (small/missing)
    if os.path.exists(output_file) and os.path.getsize(output_file) >= 10000:
        print(f"[SKIP] {template_id} already valid.")
        return "skipped"

    cmd = [
        chrome_path,
        "--headless=new",
        "--disable-gpu",
        "--no-sandbox",
        "--window-size=1280,800",
        "--hide-scrollbars",
        "--virtual-time-budget=8000",
        f"--screenshot={output_file}",
        f"http://localhost:5173/{template_id}?embed=true"
    ]

    try:
        result = subprocess.run(cmd, capture_output=True, timeout=30)
        if os.path.exists(output_file) and os.path.getsize(output_file) > 5000:
            size = os.path.getsize(output_file)
            print(f"[OK] {template_id} captured ({size} bytes).")
            return "captured"
        else:
            print(f"[FAIL] {template_id}: file missing or tiny.")
            return "failed"
    except subprocess.TimeoutExpired:
        print(f"[TIMEOUT] {template_id}.")
        return "timeout"
    except Exception as e:
        print(f"[ERROR] {template_id}: {e}")
        return "error"

print(f"Generating screenshots for IDs: {NEW_IDS}")
print(f"Output: {output_dir}\n")

with ThreadPoolExecutor(max_workers=3) as executor:
    results = list(executor.map(take_screenshot, NEW_IDS))

skipped = sum(1 for r in results if r == "skipped")
captured = sum(1 for r in results if r == "captured")
failed = sum(1 for r in results if r in ["failed", "error", "timeout"])

print(f"\n=== Summary ===")
print(f"  Skipped (already valid): {skipped}")
print(f"  Newly captured: {captured}")
print(f"  Failed: {failed}")
