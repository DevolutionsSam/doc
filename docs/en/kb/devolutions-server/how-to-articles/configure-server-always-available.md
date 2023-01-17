---
eleventyComputed:
  title: Configure {{ en.DPS }} to be Always Available
---
# {{ en.TOPICTITLE }} 
To prevent that the {{ en.DPS }} web application will recycle periodically and to be on idle mode, please follow these instructions. 
1. Open IIS Manager and expand the ***Tree View*** and select ***Application Pools*** . In the ***Application Pools*** list, select your web application and click on ***Advanced Settings*** in the Actions panel on the right. Then, change the ***Start Mode*** option to the value ***AlwaysRunning*** .  
![KB4371.png](/img/en/kb/KB4371.png) 
1. Still in the ***Advanced Settings*** , set the ***Idle Time-Out (minutes)*** option to the value 0 . When this value is set to a value different to zero, on the first connection to the web site after an idle period, the application pool needs to create a new process, loads all needed frameworks. These operations can be very slow.  
![KB4370.png](/img/en/kb/KB4370.png) 
1. Finally, set the ***Regular Time Interval (minutes)*** option to the value 0 . This will prevent the application pool to recycle periodically.  
![KB4369.png](/img/en/kb/KB4369.png) 

