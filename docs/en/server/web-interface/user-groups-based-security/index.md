---
title: User Groups Based Security
order: 50
---
{{ en.RDMS }} user groups based security allows to create a granular protection system that is quite flexible. However, flexibility comes at a price and sometimes making the wrong choices could increase the time involved in managing the system.  

The following recommendations are based on our experience with the system and the ideas shared by our community. Follow these guidelines, as they will help you to use the {{ en.RDMS }} user groups based security efficiently.  

Here are the main key points of the user groups based security:  

* Security is inherited : child items and folders are covered by a parent folder’s security. 
* Permissions can be overridden : a permission set on a sub folder will override the parent item’s permission. 
* Permissions are granular : multiple permissions can be set on entries at once.  

## User groups configuration 
When using {{ en.RDMS }} user groups based security, user groups are mostly used to control user access for multiple users at once. 
### Create the user groups 
To create user groups, navigate to Administration – User Groups , then click Add. 

![Create a User Group](/img/en/server/clip8034.png)  

All settings can be left to default unless the user group contains only administrators. In this case, check the Administrator box when configuring the user group. Enter a name for the user group, then click OK . For Active Directory groups, the domain must be provided like the following.  

![Configure a User Group](/img/en/server/clip8035.png)  

To assign users to the user group, click , then check the Is Member box of the respective user. With a user group created from an Active Directory group, there is no need to assign users as it is automatically managed by {{ en.RDMS }} .  

![Assign a user to the User Group](/img/en/server/clip8036.png)  

## User configuration 
### User template 
It is possible to change the default user template. To do so, navigate to Administration – {{ en.SST }} – User Template . These settings control the default settings of a new user. The best practice is to disable all privileges. 
### Create the user 
To create users, navigate to Administration – Users , then click Add User . Enter a Login for the user, select the User type and enter an email address. 

![Create a user](/img/en/server/clip8037.png)  

A user can be assigned to multiple user groups at once by checking the Is Member box of the respective user groups in the User Groups section of the User Management . As part of the Active Directory integration, there is no need to assign users to those user groups as it is automatically managed by {{ en.RDMS }} . 

![ServerOp4010.png](/img/en/server/ServerOp4010.png) 

### Administrators 
Administrators can do everything, regardless of the security. These users are usually the chief officers and senior management. 
### Restricted users 
Restricted users have limited access to resources. They usually have the Add and Edit rights only. These users can be mid or first level executives, such as service desk and help desk. 
### Users 
Users also have limited access to resources much like Restricted users . However, Users have by default the Add , Edit and Delete rights and can perform these actions on all unsecured entries. 
### Read only users 
Read only users can only view and use resources, but cannot edit them. These users are usually external consultants. 
### Select the appropriate user type 
When creating users, some key points must be taken into consideration. Ask yourself the following questions while configuring a new user:  

* Should they be able to access any resource without restriction? 
    * Administrators can access any resource without restriction. 
    * Make a user administrator by selecting Administrator as the User type when creating the user. 

![Administrator user](/img/en/server/clip8039.png) 

* Should they be able to add, edit, or delete entries? 
    * Make a Restricted user by selecting Restricted user as the User type when creating the user. 
    * Set up manually which rights are granted to the user. 

![Restricted user](/img/en/server/clip8040.png) 

## Entry configuration 
Access is granted or denied to users by setting permission on entries. Permissions can be set to users or user groups. The best practice is to grant permissions to user groups to control access for multiple users at once.  

To set permissions on an entry, edit any entry, then navigate to the Security – Permissions section.  

![Entry's Permissions](/img/en/server/clip8042.png) 

Permissions are usually set on folders, and apply to all child entries. A best practice is to set all the permissions of the vault folder to Never . As a result, all permissions of all entries are denied by default.  

![Root Permissions](/img/en/server/clip8043.png) 

Access is denied to users by expressly granting the access to other users. In other words, all users that are not on the list of a permission have the access denied.  

For a user to have access to a sub folder, the user must have at least the View permission on all parent folders.  

Consider the following structure:  

![Sample Structure](/img/en/server/clip8044.png) 

There are three levels of folders: the Vault, Telemark, and child items of Telemark.  

Suppose that a user, such as a consultant, must have access to the Montreal folder only. The consultant must be granted the View permission on the Telemark folder as well. However, granting the View access to the Telemark folder gives to the consultant the permissions to view all child items of Telemark. To deny the View permissions for the consultant on specific child items, the View permissions of these items must be expressly set for other users.  

![Permissions Structure](/img/en/server/clip8045.png) 



