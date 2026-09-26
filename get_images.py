import urllib.request
import urllib.parse
import json
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

def get_image(query):
    url = f"https://duckduckgo.com/i.js?q={urllib.parse.quote(query)}&o=json"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        html = urllib.request.urlopen(req, context=ctx).read().decode('utf-8')
        data = json.loads(html)
        if 'results' in data and len(data['results']) > 0:
            return data['results'][0]['image']
    except Exception as e:
        pass
    return ""

print("Gojo:", get_image("gojo satoru wallpaper 4k pc"))
print("Ayanokoji:", get_image("ayanokoji kiyotaka wallpaper 4k pc"))
print("Kakashi:", get_image("kakashi hatake wallpaper 4k pc"))
