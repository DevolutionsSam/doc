---
eleventyComputed:
  title: Authentication Issue with {{ en.DPS }}
---
### Issue #1
{{ en.RDM }} client application still authenticates every minute on {{ en.DPS }} data source or constantly switch to Not Connected regularly.
### Solution
The ***Token Valid Time*** parameter value is too short. Increase this value to keep the token valid for a longer period to fit your requirements.  
![Advanced Settings.png](/img/en/kb/KB4013.png)
### Issue #2
{{ en.DWL }} or {{ en.DPS }} web interface are disconnected on short notice.
### Solution
The Inactivity Time parameter value is too short. Increase this value to keep the connection alive for a longer period to fit your requirements.  
![Advanced Settings.png](/img/en/kb/KB8007.png)
