---
title: Issue Using DWL with Localhost with HTTPS
---
# {{ en.TOPICTITLE }}
{{ en.DWL }} will probably never work with HTTPS for a few reasons:
1. Need to generate a certificate which will cause a lot of issues when communicating with native apps [Certificates for localhost](https://letsencrypt.org/docs/certificates-for-localhost/)
2. Even if you could generate a certificate, you will get net::ERR_CERT_AUTHORITY_INVALID because the certificate will be self-signed and on localhost Chrome will block the requests.
3. You will need to check the flag ***Allow invalid certificates for resources loaded from localhost*** in Chrome which is not recommended at chrome://flags/#allow-insecure-localhost  

So the only workaround is to use the native messaging: [DWL via Native Messaging](/kb/devolutions-web-login/how-to-articles/dwl-via-native-messaging/)
