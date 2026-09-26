import urllib.request
import json
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

def search_wallhaven(query):
    url = f"https://wallhaven.cc/api/v1/search?q={urllib.request.quote(query)}&sorting=toplist"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        response = urllib.request.urlopen(req, context=ctx).read()
        data = json.loads(response)
        if 'data' in data and len(data['data']) > 0:
            return data['data'][0]['path']
    except Exception as e:
        print(f"Error: {e}")
    return ""

print("Gojo:", search_wallhaven("gojo satoru"))
print("Ayanokoji:", search_wallhaven("ayanokoji kiyotaka"))
print("Kakashi:", search_wallhaven("kakashi hatake"))
