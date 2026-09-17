"""
SHRII PALACE RESORTS — 26-PAGE INTEGRITY AND HTTP VERIFICATION SUITE
Validates HTTP 200 OK status for all 26 pages, scripts, styles, and media.
"""

import urllib.request
import urllib.error
import sys

BASE_URL = "http://localhost:8080/"

ALL_26_PAGES_AND_ASSETS = [
    # Brand Hubs (10)
    "index.html",
    "about.html",
    "stay.html",
    "weddings.html",
    "events.html",
    "dining.html",
    "experiences.html",
    "gallery.html",
    "contact.html",
    "enquire.html",

    # Destination 1: Udaipurwati Hub & Sub-Pages (6)
    "destinations/index.html",
    "destinations/udaipurwati.html",
    "destinations/udaipurwati-weddings.html",
    "destinations/udaipurwati-rooms.html",
    "destinations/udaipurwati-banquets.html",
    "destinations/udaipurwati-gallery.html",
    "destinations/udaipurwati-location.html",

    # Destination 2: Nangal Hub & Sub-Pages (6)
    "destinations/nangal.html",
    "destinations/nangal-rooms.html",
    "destinations/nangal-weddings.html",
    "destinations/nangal-dining.html",
    "destinations/nangal-banquets.html",
    "destinations/nangal-gallery.html",
    "destinations/nangal-location.html",

    # Policies & Legal (2)
    "privacy.html",
    "terms.html",

    # Styles, Scripts & Assets
    "css/main.css",
    "js/destinationsData.js",
    "js/main.js",
    "assets/images/logo.webp",
    "assets/images/_DSC5147_lg.webp",
    "assets/images/_DSC4754_lg.webp",
    "assets/images/_DSC5104_lg.webp",
    "assets/images/_DSC5118_lg.webp",
    "assets/images/_DSC5119_lg.webp",
    "assets/images/_DSC5135_lg.webp",
    "assets/images/_DSC5142_lg.webp",
    "assets/images/_DSC5150_lg.webp",
    "assets/images/_DSC5151_lg.webp",
    "assets/images/_DSC5158_lg.webp",
    "assets/images/_DSC5117_lg.webp",
    "assets/images/_DSC5114_lg.webp",
    "assets/images/_DSC5111_lg.webp",
    "assets/videos/hero-drone.mp4",
    "robots.txt",
    "sitemap.xml",
]

def main():
    print(f"=== TESTING ALL {len(ALL_26_PAGES_AND_ASSETS)} PAGES, SUB-PAGES & ASSETS ON {BASE_URL} ===")
    failed = []
    
    for path in ALL_26_PAGES_AND_ASSETS:
        url = BASE_URL + path
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req, timeout=5) as response:
                status = response.status
                data = response.read()
                size = len(data)
                if status == 200:
                    print(f" [HTTP 200 OK] {path:<40} ({size:>7} bytes)")
                else:
                    print(f" [FAILED {status}] {path}")
                    failed.append((path, status))
        except urllib.error.HTTPError as e:
            print(f" [HTTP ERROR {e.code}] {path}")
            failed.append((path, e.code))
        except Exception as e:
            print(f" [ERROR] {path}: {e}")
            failed.append((path, str(e)))

    print("\n" + "=" * 60)
    if not failed:
        print(f">>> ALL {len(ALL_26_PAGES_AND_ASSETS)} PAGES, SUB-PAGES & ASSETS RETURNED HTTP 200 OK! <<<")
        print("=" * 60)
        sys.exit(0)
    else:
        print(f">>> FAILED {len(failed)} ASSETS:")
        for f in failed:
            print(f"  - {f[0]}: {f[1]}")
        sys.exit(1)

if __name__ == "__main__":
    main()
