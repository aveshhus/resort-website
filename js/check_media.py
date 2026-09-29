import os
import re
import subprocess

# Get list of git tracked files
p = subprocess.run(['git', 'ls-files'], capture_output=True, text=True)
git_files = set(os.path.normpath(f.strip()) for f in p.stdout.splitlines() if f.strip())

html_files = [f for f in os.listdir('.') if f.endswith('.html')]
if os.path.exists('destinations'):
    html_files += [os.path.join('destinations', f) for f in os.listdir('destinations') if f.endswith('.html')]

js_files = [os.path.join('js', f) for f in os.listdir('js') if f.endswith('.js')]
css_files = [os.path.join('css', f) for f in os.listdir('css') if f.endswith('.css')]

print(f"Total HTML: {len(html_files)}, JS: {len(js_files)}, CSS: {len(css_files)}")
print(f"Total git tracked files: {len(git_files)}")

patterns = [
    r'src=["\']([^"\']+)["\']',
    r'poster=["\']([^"\']+)["\']',
    r'data-full-src=["\']([^"\']+)["\']',
    r'url\(["\']?([^"\'\)]+)["\']?\)',
    r'["\'](assets/[^"\']+\.(?:webp|jpg|jpeg|png|mp4|webm|svg))["\']',
    r'["\'](\.\./assets/[^"\']+\.(?:webp|jpg|jpeg|png|mp4|webm|svg))["\']',
    r'["\'](media/[^"\']+)["\']'
]

missing_disk = []
missing_git = []
checked = 0

for file_list, is_sub in [(html_files, False), (js_files, False), (css_files, False)]:
    for file_path in file_list:
        dir_name = os.path.dirname(file_path) or '.'
        with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
        
        for p in patterns:
            for m in re.findall(p, content):
                if m.startswith('http') or m.startswith('#') or m.startswith('mailto:') or m.startswith('tel:') or m.startswith('data:') or m.startswith('javascript:'):
                    continue
                if m.endswith('.css') or m.endswith('.js') or m.endswith('.html') or m.endswith('.json'):
                    continue
                checked += 1
                clean_m = m.split('?')[0].split('#')[0]
                target = os.path.normpath(os.path.join(dir_name, clean_m))
                if not os.path.exists(target):
                    missing_disk.append((file_path, m, target))
                elif target not in git_files:
                    missing_git.append((file_path, m, target))

print(f"\nTotal media references checked: {checked}")
print(f"References missing on DISK: {len(missing_disk)}")
for f, m, t in missing_disk:
    print(f"  [MISSING ON DISK] {f} -> '{m}' (resolved: '{t}')")

print(f"\nReferences NOT TRACKED IN GIT: {len(missing_git)}")
for f, m, t in missing_git:
    print(f"  [NOT IN GIT] {f} -> '{m}' (resolved: '{t}')")
