import os

img_dir = r'assets/images'
files = sorted([f for f in os.listdir(img_dir) if f.endswith('_lg.webp')])

html_items = []
for f in files:
    base = f.replace('_lg.webp', '')
    if base == 'logo': continue
    sm = f'{base}_sm.webp'
    lg = f'{base}_lg.webp'
    
    cat = 'architecture'
    dest = 'nangal'
    title = f'Resort Vista {base}'
    caption = 'Authentic photography from Shrii Palace Resorts properties.'
    
    try:
        num = int(base.replace('_DSC', ''))
        if num in [5147, 5148, 5149, 5150, 5151, 5152, 5153, 5154]:
            cat = 'weddings'
            dest = 'udaipurwati'
            title = 'Celebration Grounds & Lawns'
            caption = 'Grand outdoor wedding setups and mandap arenas at Udaipurwati.'
        elif num in [5113, 5114, 5115, 5116, 5117, 5118, 5119, 5120]:
            cat = 'rooms'
            dest = 'nangal' if num != 5117 else 'udaipurwati'
            title = 'Luxury Room & Suite Interior'
            caption = 'Plush bedding, heritage furniture, and scenic views.'
        elif num in [5135, 5137, 5138, 5139, 5140, 5141]:
            cat = 'pool'
            dest = 'nangal'
            title = 'Resort Swimming Pool & Deck'
            caption = 'Crystal clear swimming pool surrounded by Aravalli foothills.'
        elif num in [5156, 5157, 5158, 5159, 5160, 5161]:
            cat = 'events'
            dest = 'nangal'
            title = 'Grand Banquet & Conference Hall'
            caption = 'Modern banquet seating and conference infrastructure.'
    except:
        pass

    html_items.append(f'''        <div class="gallery-item" data-category="{cat}" data-dest="{dest}" data-full-src="assets/images/{lg}" data-title="{title}" data-caption="{caption}">
          <img src="assets/images/{sm}" alt="{title}" loading="lazy">
          <div class="gallery-item-overlay">
            <span class="gallery-item-dest">{dest.capitalize()}</span>
            <h4 class="gallery-item-title">{title}</h4>
          </div>
        </div>''')

with open('assets/gallery_items.html', 'w', encoding='utf-8') as f:
    f.write('\n'.join(html_items))

print(f'Wrote {len(html_items)} gallery items to assets/gallery_items.html')
