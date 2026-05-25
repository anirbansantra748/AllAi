"""
Retry failed screenshots with longer timeouts and serial execution.
"""
import os
import subprocess

chrome_paths = [
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
    r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
    r"C:\Users\anirb\AppData\Local\Google\Chrome\Application\chrome.exe"
]
chrome_path = next((p for p in chrome_paths if os.path.exists(p)), None)

output_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), "public", "screenshots")
RETRY_IDS = [109, 110, 111]

for tid in RETRY_IDS:
    output_file = os.path.join(output_dir, f"{tid}.png")
    # Remove any small/incomplete file
    if os.path.exists(output_file) and os.path.getsize(output_file) < 5000:
        os.remove(output_file)
        print(f"Removed small file for {tid}")

    cmd = [
        chrome_path,
        "--headless=new",
        "--disable-gpu",
        "--no-sandbox",
        "--window-size=1280,800",
        "--hide-scrollbars",
        "--virtual-time-budget=15000",
        f"--screenshot={output_file}",
        f"http://localhost:5173/{tid}?embed=true"
    ]
    print(f"Capturing {tid}...")
    try:
        subprocess.run(cmd, capture_output=True, timeout=60)
        if os.path.exists(output_file):
            size = os.path.getsize(output_file)
            print(f"  [OK] {tid}: {size} bytes")
        else:
            print(f"  [FAIL] {tid}: no file")
    except subprocess.TimeoutExpired:
        print(f"  [TIMEOUT] {tid}")
    except Exception as e:
        print(f"  [ERROR] {tid}: {e}")

print("Done.")
