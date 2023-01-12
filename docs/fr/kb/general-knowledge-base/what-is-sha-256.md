---
title: SHA-256
---
# {{ fr.TOPICTITLE }} 
## Description 
Le SHA ( Secure Hash Algorithm ) est l&apos;une des nombreuses fonctions de hachage cryptographique. Un hachage cryptographique est comme une signature pour un ensemble de données. Si vous souhaitez comparer deux ensembles de données brutes (source du fichier, texte ou autre), il est toujours préférable de les hacher et de comparer les valeurs SHA-256. 
Il s&apos;agit en quelque sorte des empreintes digitales des données. Même si un seul symbole est modifié, l&apos;algorithme produira une valeur de hachage différente. L&apos;algorithme SHA-256 génère un hachage presque unique, de taille fixe de 256 bits (32 octets). Le hachage est ce qu&apos;on appelle une fonction à sens unique. Il convient donc à la vérification de l&apos;intégrité de vos données, à l&apos;authentification par hachage, à la protection contre la falsification, aux signatures numériques et à la blockchain. 
L&apos;algorithme SHA-256 peut être utilisé pour s&apos;assurer que vous avez acquis les mêmes données que celles d&apos;origine. Par exemple, si vous téléchargez nos applications Devolutions, vous pouvez facilement vérifier si les données n&apos;ont pas été modifiées en raison d&apos;erreurs de réseau ou de l&apos;injection de logiciels malveillants. 
Pour comparer le hachage de votre fichier, cliquez sur l&apos;icône SHA-256 sur la page de téléchargement de notre site Devolutions. 
Pour plus d&apos;unformations et pour savoir comment obtenir le SHA-256 d&apos;un fichier, voici le sujet [Get-FileHash](https://docs.microsoft.com/fr-ca/powershell/module/microsoft.powershell.utility/get-filehash?view=powershell-7.2) (EN) de Microsoft. 
{% snippet icon.badgeNotice %} 
La commande devrait ressembler à ceci : Get-FileHash C:\Users\user1\Downloads\Setup.RemoteDesktopManager.exe -Algorithm SHA256 | Format-List 
{% endsnippet %}
 

