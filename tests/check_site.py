from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parents[1]

class Page(HTMLParser):
    def __init__(self):
        super().__init__(); self.ids=[]; self.anchors=[]; self.resources=[]; self.headings=0
    def handle_starttag(self, tag, attrs):
        a=dict(attrs)
        if 'id' in a: self.ids.append(a['id'])
        if tag=='h1': self.headings+=1
        if tag=='a': self.anchors.append(a)
        if tag=='script' and a.get('src'): self.resources.append(a['src'])
        if tag=='link' and a.get('rel')=='stylesheet': self.resources.append(a['href'])

page=Page(); page.feed((ROOT/'index.html').read_text())
assert page.headings==1, 'A página deve possuir um h1'
assert len(page.ids)==len(set(page.ids)), 'IDs duplicados'
for a in page.anchors:
    href=a.get('href','')
    if href.startswith('#'): assert href[1:] in page.ids, href
    if a.get('target')=='_blank': assert {'noopener','noreferrer'} <= set(a.get('rel','').split()), href
for resource in page.resources:
    if not urlparse(resource).scheme: assert (ROOT/urlparse(resource).path).is_file(), resource
for required in ['README.md','LICENSE','CONTRIBUTING.md','SECURITY.md','documentacao/entrega-final.md']:
    assert (ROOT/required).is_file(), required
print('HTML, âncoras, recursos, links externos e documentação verificados.')
