---
title: Générer des certificats autosignés serveur et client avec OpenSSL
---
# Générer des certificats sécurisés auto-signés de serveur et de client avec OpenSSL 
## DESCRIPTION 
## Procédure 
{% snippet icon.badgeHelp %} 
Sous Windows, nous recommandons d&apos;utiliser Chocolatey pour installer OpenSSL et ses dépendances. La ligne de commande est simplement choco install openssl . 
{% endsnippet %}
 
[Créer l&apos;authorité de certification (AC) racine]( 
[Générer une demande de signature de certificat (CSR) - Serveur]( 
[Générer une demande de signature de certificat (CSR) - Client]( 
[Traiter une demande de signature de certificat (CSR) sur l&apos;autorité de certification (AC) racine]( 
### Autorité de certification (AC) racine 
1. Générer la clé privée de l&apos;AC racine. Chaque certificat doit avoir une clée privée correspondante. Générer celle-ci en utilisant la ligne de commande suivante : openssl ecparam -name prime256v1 -genkey -noout -out ca.key Cela créera une clé privée de 256 bits avec des courbes elliptiques, ce qui est la norme de l&apos;industrie. 
2. Générer l&apos;AC racine. L&apos;AC génère et émèt des certificats. Générer celle-ci en utilisant la ligne de commande suivante : openssl req -new -x509 -sha256 -key ca.key -out ca.crt Vous serez invité à fournir quelques informations sur l&apos;AC. Remplacer celles-ci avec vos propres informations spécifiques : Country Name (2 letter code) [AU]:US State or Province Name (full name) [Some-State]:CA Locality Name (eg, city) []:Toontown Organization Name (eg, company) [Internet Widgits Pty Ltd]:Acme inc. Organizational Unit Name (eg, section) []:Security Common Name (e.g. server FQDN or YOUR name) []:acme.com Email Address []:security@acme.com Votre certificat sera généré dans le fichier ca.crt. 
[Installer le certificat](KB_InstallRootCertificates) . Il est à noter que le certificat doit être installé sur le serveur et sur tous les clients pour pouvoir valider la légitimité des certificats émis. Certains navigateurs possèdent aussi certaines particularités qui sont décrites dans la rubrique. 
### Certificat de serveur 
{% snippet icon.shieldCaution %} 
Ces étapes sont généralement effectuées sur chaque serveur ou appareil pour lequel vous avez l&apos;intention de demander un certificat. Installez OpenSSL s&apos;il n&apos;est pas présent. L&apos;alternative consiste à déployer de manière sécurisée la clé privée sur le serveur de destination en même temps que le certificat. Nous vous recommandons d&apos;utiliser cette dernière approche uniquement si vous devez adhérer à des déploiements scriptés pour suivre les pratiques cloudops/devops. 
{% endsnippet %}
 
1. Générer la clé privée du certificat de serveur. Chaque certificat doit avoir une clée privée correspondante. Générer celle-ci en utilisant la ligne de commande suivante : openssl ecparam -name prime256v1 -genkey -noout -out server.key Cela créera une clé privée de 256 bits dans le fichier server.key. 
2. Générer le CSR du serveur. Cette requête sera plus tard traitée sur l&apos;AC racine. Générer celle-ci en utilisant la ligne de commande suivante : openssl req -new -sha256 -key server.key -out server.csr Vous serez invité à fournir quelques informations sur le certificat de serveur. Vous pouvez entrer la plupart des informations que vous avez utilisées pour le certificat AC, mais pour sécuriser un site Web, vous devez spécifier le nom de domaine pleinement qualifié (FQDN) exact qui est utilisé par le serveur. Par exemple : Country Name (2 letter code) [AU]:US State or Province Name (full name) [Some-State]:CA Locality Name (eg, city) []:Toontown Organization Name (eg, company) [Internet Widgits Pty Ltd]:Acme inc. Organizational Unit Name (eg, section) []:Security Common Name (e.g. server FQDN or YOUR name) []:vault.acme.com Email Address []:security@acme.com Vous serez également invité à fournir un mot de passe. Utiliser un gestionnaire de mots de passe ainsi qu&apos;un générateur de mots de passe forts est essentiel. Le fichier server.csr doit maintenant être transféré à l&apos;AC racine. 
3. Traiter la requêtre en suivant les instructions [plus bas]( . 
4. Déployer le certificat. 
### Certificat de client 
Suivez la même procédure que pour le [serveur]( ci-dessus, mais vous devez adapter à vos besoins deux attributs des informations que vous saisissez, à savoir le Common Name et le Email Address Common Name (e.g. server FQDN or YOUR name) []:John Doe 
Email Address []:JohnDoe@acme.com 
### Traiter une demande de signature de certificat (CSR) sur l&apos;autorité de certification (AC) racine 
Traiter le CSR en générant un certificat. Générer celle-ci en utilisant la ligne de commande suivante, où server.csr a été généré sur le serveur : openssl x509 -req -in server.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out server.crt -days 1000 -sha256 Le certificat est ainsi généré dans le fichier server.crt. Vous devez le déployer sur le serveur où vous avez généré le CSR. 

