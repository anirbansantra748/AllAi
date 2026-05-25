"""Retry template 110 with extra long wait."""
import os, subprocess, time

chrome_path = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
output_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), "public", "screenshots")
output_file = os.path.join(output_dir, "110.png")

if os.path.exists(output_file):
    os.remove(output_file)
    print("Removed old 110.png")

# Use very long virtual time budget
cmd = [
    chrome_path,
    "--headless=new",
    "--disable-gpu",
    "--no-sandbox",
    "--window-size=1280,800",
    "--hide-scrollbars",
    "--virtual-time-budget=20000",
    "--run-all-compositor-stages-before-draw",
    f"--screenshot={output_file}",
    "http://localhost:5173/110?embed=true"
]

print("Capturing 110 with extended wait...")
try:
    result = subprocess.run(cmd, capture_output=True, timeout=90)
    if os.path.exists(output_file):
        size = os.path.getsize(output_file)
        print(f"[Result] 110: {size} bytes")
        if size < 10000:
            print("File still tiny, will try with stable headless mode...")
            os.remove(output_file)
            cmd2 = [
                chrome_path,
                "--headless",
                "--disable-gpu",
                "--no-sandbox",
                "--window-size=1280,800",
                "--hide-scrollbars",
                "--virtual-time-budget=15000",
                f"--screenshot={output_file}",
                "http://localhost:5173/110?embed=true"
            ]
            subprocess.run(cmd2, capture_output=True, timeout=60)
            if os.path.exists(output_file):
                print(f"[Final] 110: {os.path.getsize(output_file)} bytes")
    else:
        print("[FAIL] No file created.")
except Exception as e:
    print(f"Error: {e}")
