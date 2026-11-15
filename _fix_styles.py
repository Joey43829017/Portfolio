import re

path = r'C:/Users/joeyk/Golf_Putter_Portfolio/styles.css'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Remove the duplicate CSS block (lines 620-934) that was accidentally appended.
# This block contains .featured-project-section styles and viewer-container etc.
dup_block_start = "/* Featured Project Section */"
dup_block_end = "\n.timeline::before {"

if dup_block_start in content and dup_block_end in content:
    start_idx = content.index(dup_block_start) + len(dup_block_start)
    end_idx = content.index(dup_block_end, start_idx)
    removed_chars = content[start_idx:end_idx]
    content = content[:start_idx] + content[end_idx:]
    print(f"Removed featured section duplicate block ({len(removed_chars)} chars)")

# Remove the duplicate scroll-progress CSS that got appended later (around line ~1340)
dup_scroll = re.search(r'(?m)^/\* Scroll Progress Indicator \*/.*?^\.btn-outline:hover\{', content, re.S)
if dup_scroll:
    removed_chars = len(dup_scroll.group(0))
    content = content.replace(dup_scroll.group(0), "")
    print(f"Removed duplicate scroll progress styles ({removed_chars} chars)")

# Remove the card-hover block (around line ~1378)
dup_card_hover = re.search(r'(?m)^/\* Card Hover Effects \*/.*?^\.card-hover:hover\{', content, re.S)
if dup_card_hover:
    removed_chars = len(dup_card_hover.group(0))
    content = content.replace(dup_card_hover.group(0), "")
    print(f"Removed duplicate card hover styles ({removed_chars} chars)")

# Remove gradient-text block (around line ~1389)
dup_gradient = re.search(r'(?m)^/\* Text Gradient Accent \*/.*?^\.loaded', content, re.S)
if dup_gradient:
    removed_chars = len(dup_gradient.group(0))
    content = content.replace(dup_gradient.group(0), "")
    print(f"Removed duplicate gradient text styles ({removed_chars} chars)")

# Remove lazy-load block (around line ~1398)
dup_lazy = re.search(r'(?m)^/\* Smooth Image Loading \*/.*?^\.loaded', content, re.S)
if dup_lazy:
    removed_chars = len(dup_lazy.group(0))
    content = content.replace(dup_lazy.group(0), "")
    print(f"Removed duplicate lazy-load styles ({removed_chars} chars)")

# Remove fade-on-scroll block (around line ~1503)
dup_fade = re.search(r'(?m)^/\* Timeline Animation \*/.*?^\.fade-on-scroll.visible', content, re.S)
if dup_fade:
    removed_chars = len(dup_fade.group(0))
    content = content.replace(dup_fade.group(0), "")
    print(f"Removed duplicate fade-on-scroll styles ({removed_chars} chars)")

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Styles.css cleanup complete.")