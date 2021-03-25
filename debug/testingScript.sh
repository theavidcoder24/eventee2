# register action request
curl -i -X POST \
   -H "Content-Type:application/json" \
 'http://localhost/eventee/api/ws.php?action=register'

 curl 'http://localhost/eventee/api/ws.php?action=register' \
  -H 'Connection: keep-alive' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36' \
  -H 'Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryG699UgdAd7F0ybjp' \
  -H 'Accept: */*' \
  -H 'Origin: http://localhost' \
  -H 'Sec-Fetch-Site: same-origin' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Referer: http://localhost/eventee/index.html' \
  -H 'Accept-Language: en-AU,en-GB;q=0.9,en-US;q=0.8,en;q=0.7' \
  -H 'Cookie: PHPSESSID=hqcj429g2k92mg41ser3k4e833' \
  --data-binary $'------WebKitFormBoundaryG699UgdAd7F0ybjp\r\nContent-Disposition: form-data; name="action"\r\n\r\nregister\r\n------WebKitFormBoundaryG699UgdAd7F0ybjp\r\nContent-Disposition: form-data; name="reg_fullname"\r\n\r\nkjsdfkjfk\r\n------WebKitFormBoundaryG699UgdAd7F0ybjp\r\nContent-Disposition: form-data; name="reg_ph"\r\n\r\n0454545\r\n------WebKitFormBoundaryG699UgdAd7F0ybjp\r\nContent-Disposition: form-data; name="reg_dob"\r\n\r\nNov 19, 2020\r\n------WebKitFormBoundaryG699UgdAd7F0ybjp\r\nContent-Disposition: form-data; name="reg_email"\r\n\r\nleo@hotmail.com\r\n------WebKitFormBoundaryG699UgdAd7F0ybjp\r\nContent-Disposition: form-data; name="reg_pass"\r\n\r\npass\r\n------WebKitFormBoundaryG699UgdAd7F0ybjp\r\nContent-Disposition: form-data; name="registerUser"\r\n\r\nregister\r\n------WebKitFormBoundaryG699UgdAd7F0ybjp--\r\n' \
  --compressed

# login action request
curl -i -X POST \
   -H "Content-Type:application/json" \
 'http://localhost/eventee/api/ws.php?action=login'

 curl 'http://localhost/eventee/api/ws.php?action=login' \
  -H 'Connection: keep-alive' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36' \
  -H 'Content-Type: multipart/form-data; boundary=----WebKitFormBoundarygpAHHCNlSuA0j5b5' \
  -H 'Accept: */*' \
  -H 'Origin: http://localhost' \
  -H 'Sec-Fetch-Site: same-origin' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Referer: http://localhost/eventee/index.html' \
  -H 'Accept-Language: en-AU,en-GB;q=0.9,en-US;q=0.8,en;q=0.7' \
  -H 'Cookie: PHPSESSID=hqcj429g2k92mg41ser3k4e833' \
  --data-binary $'------WebKitFormBoundarygpAHHCNlSuA0j5b5\r\nContent-Disposition: form-data; name="action"\r\n\r\nlogin\r\n------WebKitFormBoundarygpAHHCNlSuA0j5b5\r\nContent-Disposition: form-data; name="log_email"\r\n\r\n\r\n------WebKitFormBoundarygpAHHCNlSuA0j5b5\r\nContent-Disposition: form-data; name="log_pass"\r\n\r\n\r\n------WebKitFormBoundarygpAHHCNlSuA0j5b5--\r\n' \
  --compressed

# is_logged_in
curl 'http://localhost/eventee/api/ws.php?action=is_logged_in' \
  -H 'Connection: keep-alive' \
  -H 'Pragma: no-cache' \
  -H 'Cache-Control: no-cache' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36' \
  -H 'Accept: */*' \
  -H 'Sec-Fetch-Site: same-origin' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Referer: http://localhost/eventee/index.html' \
  -H 'Accept-Language: en,en-GB;q=0.9,en-US;q=0.8' \
  -H 'Cookie: PHPSESSID=psstqdk41osr32j1eagghbjdkt' \
  --compressed

# logout
curl -i -X GET \
 'http://localhost/eventee/api/ws.php?action=logout'
 
# createEvents 
curl -i -X GET \
 'http://localhost/eventee/api/ws.php?action=createEvents'
 
# displayEvents action request
curl -i -X GET \
 'http://localhost/eventee/api/ws.php?action=displayEvents'

 curl 'http://localhost/eventee/api/ws.php?action=displayEvents' \
  -H 'Connection: keep-alive' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36' \
  -H 'Accept: */*' \
  -H 'Sec-Fetch-Site: same-origin' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Referer: http://localhost/eventee/index.html' \
  -H 'Accept-Language: en-AU,en-GB;q=0.9,en-US;q=0.8,en;q=0.7' \
  -H 'Cookie: PHPSESSID=hqcj429g2k92mg41ser3k4e833' \
  --compressed
 
# fillUpdate
curl -i -X POST \
   -H "Content-Type:application/json" \
 'http://localhost/eventee/api/ws.php?action=fillUpdate'

# updateEvent
curl -i -X POST \
   -H "Content-Type:application/json" \
 'http://localhost/eventee/api/ws.php?action=updateEvent'

 curl 'http://localhost/eventee/api/ws.php?action=updateEvent' \
  -H 'Connection: keep-alive' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36' \
  -H 'Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryxwezypFK7ZBJqeBp' \
  -H 'Accept: */*' \
  -H 'Origin: http://localhost' \
  -H 'Sec-Fetch-Site: same-origin' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Referer: http://localhost/eventee/index.html' \
  -H 'Accept-Language: en-AU,en-GB;q=0.9,en-US;q=0.8,en;q=0.7' \
  -H 'Cookie: PHPSESSID=hqcj429g2k92mg41ser3k4e833' \
  --data-binary $'------WebKitFormBoundaryxwezypFK7ZBJqeBp\r\nContent-Disposition: form-data; name="action"\r\n\r\nupdateEvent\r\n------WebKitFormBoundaryxwezypFK7ZBJqeBp\r\nContent-Disposition: form-data; name="update_ev_name"\r\n\r\nFish and Chips\r\n------WebKitFormBoundaryxwezypFK7ZBJqeBp\r\nContent-Disposition: form-data; name="update_ev_desc"\r\n\r\nMeetup at Scoopys. Grab a coffee, gentle stroll along the broad walk to Bribie bridge and back or not. Lunch at one of the many Fish & Chips shops.\r\n------WebKitFormBoundaryxwezypFK7ZBJqeBp\r\nContent-Disposition: form-data; name="update_ev_cat"\r\n\r\nFood & Drink\r\n------WebKitFormBoundaryxwezypFK7ZBJqeBp\r\nContent-Disposition: form-data; name="update_ev_address"\r\n\r\n78 Cole Street\r\n------WebKitFormBoundaryxwezypFK7ZBJqeBp\r\nContent-Disposition: form-data; name="update_ev_loc"\r\n\r\nSouth Brisbane\r\n------WebKitFormBoundaryxwezypFK7ZBJqeBp\r\nContent-Disposition: form-data; name="update_ev_date"\r\n\r\nOct 08, 2020\r\n------WebKitFormBoundaryxwezypFK7ZBJqeBp\r\nContent-Disposition: form-data; name="update_ev_time"\r\n\r\n03:30 PM\r\n------WebKitFormBoundaryxwezypFK7ZBJqeBp--\r\n' \
  --compressed

# remove
curl 'http://localhost/eventee/api/ws.php?action=remove' \
  -X 'DELETE' \
  -H 'Connection: keep-alive' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.66 Safari/537.36' \
  -H 'Accept: */*' \
  -H 'Origin: http://localhost' \
  -H 'Sec-Fetch-Site: same-origin' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Referer: http://localhost/eventee/index.html' \
  -H 'Accept-Language: en-AU,en-GB;q=0.9,en-US;q=0.8,en;q=0.7' \
  -H 'Cookie: PHPSESSID=hqcj429g2k92mg41ser3k4e833' \
  --compressed

 
