
from http.server import BaseHTTPRequestHandler
from urllib import parse
import json
from recipe_scrapers import scrape_me

class handler(BaseHTTPRequestHandler):

  def do_GET(self):
    s = self.path
    params = dict(parse.parse_qsl(parse.urlsplit(s).query))
    if "url" in params:
      scraper = scrape_me(params["url"], wild_mode=True)
      self.send_response(200)
      self.send_header('Content-type','text/plain')
      self.end_headers()
      self.wfile.write(scraper.title().encode())
      return
    else:
      self.send_response(400)
      self.send_header('Content-type','text/plain')
      self.end_headers()
      self.wfile.write('Error: URL param not provided'.encode())
      return
