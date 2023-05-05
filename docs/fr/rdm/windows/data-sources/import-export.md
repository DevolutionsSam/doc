---
title: Importer et Exporter
---
Vous pouvez simplifier le déploiement pour plusieurs utilisateurs en exportant et en important la configuration de la source de données. Le fichier généré aura une extension .rdd et contient toutes les informations pour recréer la configuration. Veuillez noter que le fichier .rdd n&apos;inclut pas le contenu de la base de données, seule la configuration est exportée. Utilisez les autres fonctionnalités d&apos;exportation pour sauvegarder ou copier le contenu de la base de données.  

Vous trouverez dans ***Fichier - Source de données*** l&apos;accès pour l&apos;importation ou l&apos;exportation du fichier.  
![Source de données - Importer/Exporter](/img/fr/rdm/windows/clip11263.png) 

{% snippet icon.badgeCaution %} 
Le fait que les utilisateurs puissent ou non lire/écrire en mode hors ligne est d&apos;abord décidé au niveau du mode de mise en cache de la source de données. Cela ne peut pas être modifié à distance . Si vous souhaitez empêcher ou autoriser les utilisateurs distants à utiliser la fonction de Lecture/Écriture hors ligne, vous devez le faire avant d&apos;exporter votre source de données. 
{% endsnippet %}
 
{% snippet icon.shieldWarning %} 
Une source de données verrouillée peut être exportée et importée, mais son contenu ne sera pas accessible pour une utilisation à moins qu&apos;un mot de passe ne soit entré lorsque la source de données est sélectionnée. Voir [Verrouiller la source de données](/fr/rdm/windows/data-sources/lock/) pour plus d&apos;informations. 
{% endsnippet %}
 

