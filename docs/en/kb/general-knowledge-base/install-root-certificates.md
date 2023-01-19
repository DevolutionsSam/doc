---
title: Install Root Certificates
---
# {{ en.TOPICTITLE }}
Here are various procedures to install root certificates:  

## Windows
1. Open the Microsoft Management Console by searching for ***MMC*** in the ***Start*** menu. Another way is to press the Win+R keys on your keyboard and, in the ***Run*** window, search for ***MMC***
1. Select ***File – Add/Remove Snap-in***
1. In the ***Available snap-ins*** box, select ***Certificates***
1. Click the ***Add*** button.
1. In the wizard, select ***Computer Account*** , then click ***Next***
1. Select ***Local computer*** , then click ***Finish*** to end the wizard
1. Click ***OK*** to save your changes. This action will also close the ***Add or Remove Snap-ins*** dialog.
1. In the console, select ***Certificates (Local Computer)***
1. In the ***Logical Store Name*** box, right-click ***Trusted Root Certification Authorities*** and select ***All Tasks – Import***
1. Follow the instructions in the ***Certificate Import Wizard*** and provide the certificate file you have.
## Linux (ubuntu, debian)
1. sudo mkdir /usr/local/share/ca-certificates/extra
1. sudo cp ca.crt /usr/local/share/ca-certificates/extra/ca.crt
1. sudo update-ca-certificates  
Watch for a 1 added in the output messages.
## Exceptions for web browsers
### Windows
Firefox does not trust the same certificates as Windows and a setting must be applied in order to enable this.
Please consult [Mozilla&apos;s KB](https://support.mozilla.org/en-US/kb/setting-certificate-authorities-firefox)
### Linux
Both Firefox and Chrome use their own certificate trust stores.
Please consult the same [Mozilla KB](https://support.mozilla.org/en-US/kb/setting-certificate-authorities-firefox)
