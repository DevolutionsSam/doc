---
title: Type de source de données
---
{{ fr.RDM }} pour Mac prend en charge plusieurs types de sources de données. Décidez d'abord de la source de données que vous utiliserez. 

{% snippet icon.badgeNotice %} 
Lors de l'installation initiale, vous exécuterez à partir d'une source de données locale qui est une base de données SQLite. 
{% endsnippet %}
 
## Types de sources de données 

<table>
	<tr>
		<th>
ICONE
		</th>
		<th>
NOM 
		</th>
		<th>
DESCRIPTION 
		</th>
		<th>
AVANTAGES ET INCONVÉNIENTS 
		</th>
	</tr>
	<tr>
		<td>

![!!DataSourceDODLarge.png](/img/common/DataSourceDODLarge.png) 
		</td>
		<td>
{{ fr.DODV }} 
		</td>
		<td>
{{ fr.RDM }} pour Mac utilise {{ fr.DODV }} pour stocker et synchroniser vos sessions. Accédez à vos sessions où que vous soyez en utilisant une connexion Internet. 
Pour plus d'informations, veuillez consulter notre rubrique [Online Drive](/fr/cloud/rdm-online-services/online-drive/) . 
		</td>
		<td>
Avantages :  

* Rapide. 
* Fiable. 
* Service gratuit. 

Inconvénients :  

* Pas de possibilité de partage. 
* Pas de gestion de la sécurité. 
		</td>
	</tr>
	<tr>
		<td>
![!!dvls-90X90.png](/img/fr/rdm/mac/dvls-90X90.png) 
		</td>
		<td>
{{ fr.RDMS }} 
		</td>
		<td>
{{ fr.RDM }} pour Mac utilise {{ fr.RDMS }} pour stocker les informations de session.  

Pour plus d'informations, veuillez consulter notre rubrique [{{ fr.RDMS }}](/fr/rdm/mac/data-sources/data-sources-types/advanced-data-sources/server/) . 
		</td>
		<td>
Avantages : 

* Rapide 
* Fiable 
* Sécuritaire. 
* Prend en charge toutes les fonctionnalités, telles que les pièces jointes, les [Journaux d'activité](/fr/server/web-interface/reports/) , le [Mode hors-ligne](/fr/server/web-interface/administration/security-management/user-groups/settings/) et la [Gestion des utilisateurs](/fr/server/web-interface/administration/security-management/users/) . 
* Intégration Active Directory. 

Inconvénients : 

* Installation requise. 
		</td>
	</tr>
	<tr>
		<td>
![!!DataSourceDropBoxLarge.png](/img/common/DataSourceDropBoxLarge.png) 
		</td>
		<td>
Dropbox 
		</td>
		<td>
{{ fr.RDM }} pour Mac utilise l'API Dropbox pour récupérer le fichier XML à partir du coffre configuré.  

Pour plus d'informations, veuillez consulter notre rubrique [Dropbox](/fr/rdm/mac/data-sources/data-sources-types/dropbox/) . 
		</td>
		<td>
Avantages : 

* Peut être partagé en mode lecture seule. 
* Les sauvegardes (par Dropbox) sont automatiques. 
* L'infrastructure de stockage est gratuite (si elle est comprise dans votre quota de stockage gratuit). 

Inconvénients : 

* Pas de gestion de la sécurité. 
* Il existe une possibilité de conflit ou de corruption de données. 
* Ne prend pas en charge toutes les fonctionnalités, telles que les pièces jointes, les [Journaux d'activité](/fr/rdm/mac/commands/view/activity-logs/) , le [mode hors-ligne](/fr/rdm/mac/commands/file/go-offline/) et la [Gestion des utilisateurs](A/fr/rdm/mac/commands/administration/user-management/) . 
* L'intégration Dropbox utilise le SDK Dropbox, donc les fonctionnalités exclusives aux éditions Business ou Enterprise ne sont PAS prises en charge. 
		</td>
	</tr>
	<tr>
		<td>
![!!DataSourceAzureLarge.png](/img/common/DataSourceAzureLarge.png) 
		</td>
		<td>
Microsoft Azure SQL 
		</td>
		<td>
{{ fr.RDM }} pour Mac utilise la plateforme infonuagique de Microsoft pour enregistrer et gérer toutes les sessions.  

Pour plus d'informations, veuillez consulter notre rubrique Azure SQL. 
		</td>
		<td>
Avantages : 

* Rapide. 
* Fiable. 
* Sécuritaire. 
* Prend en charge toutes les fonctionnalités, telles que les pièces jointes, les [Journaux d'activité](/fr/rdm/mac/commands/view/activity-logs/) , le [mode hors-ligne](/fr/rdm/mac/commands/file/go-offline/) et la [Gestion des utilisateurs](/fr/rdm/mac/commands/administration/user-management/) . 

Inconvénients : 

* Microsoft Azure doit être configurée. 
		</td>
	</tr>
	<tr>
		<td>
![!!DataSourceSQLServerLarge.png](/img/common/DataSourceSQLServerLarge.png) 
		</td>
		<td>
Microsoft SQL Server 
		</td>
		<td>
{{ fr.RDM }} pour Mac utilise SQL Server pour enregistrer et gérer toutes les sessions. Il s'agit de l'une des sources de données disponibles pour un environnement multi-utilisateur.  

Pour plus d'informations, consultez notre rubrique [SQL Server (MSSQL)](/fr/rdm/mac/data-sources/data-sources-types/advanced-data-sources/microsoft-sql-server/) . 
		</td>
		<td>
Avantages : 

* Rapide. 
* Fiable. 
* Sécuritaire. 
* Prend en charge toutes les fonctionnalités, telles que les pièces jointes, les [Journaux d'activité](/fr/rdm/mac/commands/view/activity-logs/) , le [mode hors-ligne](/fr/rdm/mac/commands/file/go-offline/) et la [Gestion des utilisateurs](/fr/rdm/mac/commands/administration/user-management/) . 
* SQL Server Express est gratuit. 

Inconvénients : 

* SQL Server doit être installé. 
		</td>
	</tr>
	<tr>
		<td>
![!!ApplicationHubLarge.png](/img/common/ApplicationHubLarge.png) 
		</td>
		<td>
{{ fr.HUB }} Business 
		</td>
		<td>
{{ fr.RDM }} pour Mac se connecte au coffre {{ fr.HUB }} Business.  

Notez qu'il existe différents niveaux d'abonnement pour ce produit.  

Pour plus d'informations, veuillez consulter les [fonctionnalités](https://devolutions.net/password-hub/fr) ou notre rubrique [Hub Business](/fr/rdm/mac/data-sources/data-sources-types/advanced-data-sources/hub-business/) . 
		</td>
		<td>
Avantages : 

* Rapide. 
* Fiable. 
* Sécuritaire. 
* Partageable. 

Inconvénients : 

* Ne peut être hébergé à l'interne. 
* Pas de mode hors ligne. 
		</td>
	</tr>
	<tr>
		<td>
![!!Hub-personal-32x32.png](/img/common/hub-personal-32x32.png) 
		</td>
		<td>
{{ fr.HUB }} Personal 
		</td>
		<td>
{{ fr.RDM }} pour Mac utilise {{ fr.HUB }} Personal pour stocker et synchroniser vos sessions. Accédez à vos sessions où que vous soyez en utilisant une connexion Internet.  

Pour plus d'informations, veuillez consulter notre rubrique [Hub Personnal](/fr/rdm/mac/data-sources/data-sources-types/hub-personal/) . 
		</td>
		<td>
Avantages : 

* Rapide. 
* Fiable. 
* Service gratuit. 

Inconvénients : 

* Pas de possibilité de partage. 
* Pas de mode hors ligne. 
		</td>
	</tr>
	<tr>
		<td>
![!!DataSourceSQLiteLarge.png](/img/common/DataSourceSQLiteLarge.png) 
		</td>
		<td>
SQLite 
		</td>
		<td>
{{ fr.RDM }} pour Mac utilise une base de données SQLite pour stocker les informations de session.  

Pour plus d'informations, veuillez consulter notre rubrique [SQLite](/fr/rdm/mac/data-sources/data-sources-types/sqlite/) . 
		</td>
		<td>
Avantages : 

* Rapide. 
* Fiable. 
* Base de données gratuite. 
* Prend en charge toutes les fonctionnalités, telles que les pièces jointes, les [Journaux d'activité](/fr/rdm/mac/commands/view/activity-logs/) , le [mode hors-ligne](/fr/rdm/mac/commands/file/go-offline/) et la [Gestion des utilisateurs](/fr/rdm/mac/commands/administration/user-management/) . 

Inconvénients : 

* SQLite doit être installé. 
* Pas de possibilité de partage. 
		</td>
	</tr>
	<tr>
		<td>
![!!DataSourceXMLLarge.png](/img/common/DataSourceXMLLarge.png) 
		</td>
		<td>
XML 
		</td>
		<td>
{{ fr.RDM }} pour Mac enregistre les paramètres directement dans un fichier au format XML.  

Pour plus d'informations, veuillez consulter notre rubrique [XML](/fr/rdm/mac/data-sources/data-sources-types/xml/) . 
		</td>
		<td>
Avantages : 

* Sauvegarde facile. 
* Peut être modifié manuellement ou par un système externe. 
* Aucune installation. 

Inconvénients : 

* Pas de possibilité de partage. 
* Pas de gestion de la sécurité. 
* Il existe une possibilité de conflit ou de corruption de données. 
* Ne prend pas en charge toutes les fonctionnalités, telles que les pièces jointes, les [Journaux d'activité](/fr/rdm/mac/commands/view/activity-logs/) , le [mode hors-ligne](/fr/rdm/mac/commands/file/go-offline/) et la [Gestion des utilisateurs](/fr/rdm/mac/commands/administration/user-management/) . 
		</td>
	</tr>
</table>


