---
title: The INSERT Statement Conflicted with the FOREIGN KEY
description: As an administrator of the Devolutions Server instance, you receive this error message. SqlException - The INSERT statement conflicted with the FOREIGN KEY
keywords:
- INSERT Statement
- SqlException
- Foreign key
---
# {{ en.TOPICTITLE }} 
As an administrator of the {{ en.DPS }} instance, you receive this error message.  

**Error:**  

SqlException - The INSERT statement conflicted with the FOREIGN KEY constraint &quot;FK_ConnectionState_ConnectionID&quot;. The conflict occurred in database &quot;DVLS&quot;, table &quot;dbo.Connections&quot;, column &apos;ID&apos;. The statement has been terminated. at System.Data.SqlClient.SqlConnection.OnError(SqlException exception, Boolean breakConnection, Action`1 wrapCloseInAction) at System.Data.SqlClient.TdsParser.ThrowExceptionAndWarning(TdsParserStateObject stateObj, Boolean callerHasConnectionLock, Boolean asyncClose) at System.Data.SqlClient.TdsParser.TryRun(RunBehavior runBehavior, SqlCommand cmdHandler, SqlDataReader dataStream, BulkCopySimpleResultSet bulkCopyHandler, TdsParserStateObject stateObj, Boolean&amp; dataReady) at System.Data.SqlClient.SqlCommand.FinishExecuteReader(SqlDataReader ds, RunBehavior runBehavior, String resetOptionsString, Boolean isInternal, Boolean forDescribeParameterEncryption) at System.Data.SqlClient.SqlCommand.RunExecuteReaderTds(CommandBehavior cmdBehavior, RunBehavior runBehavior, Boolean returnStream, Boolean async, Int32 timeout, Task&amp; task, Boolean asyncWrite, Boolean inRetry, SqlDataReader ds, Boolean describeParameterEncryptionRequest) at System.Data.SqlClient.SqlCommand.RunExecuteReader(CommandBehavior cmdBehavior, RunBehavior runBehavior, Boolean returnStream, String method, TaskCompletionSource`1 completion, Int32 timeout, Task&amp; task, Boolean&amp; usedCache, Boolean asyncWrite, Boolean inRetry) at System.Data.SqlClient.SqlCommand.InternalExecuteNonQuery(TaskCompletionSource`1 completion, String methodName, Boolean sendToPipe, Int32 timeout, Boolean&amp; usedCache, Boolean asyncWrite, Boolean inRetry) at System.Data.SqlClient.SqlCommand.ExecuteNonQuery() at Devolutions.Server.DatabaseManager.ExecuteNonQuery(String sql, IEnumerable`1 parameters, CommandType commandType) at Devolutions.Server.ConnectionLogManager.AddLogEntry(SessionContext context, LogEntryEntity logEntry) --- INSERT INTO ConnectionLog ( [ID] ,[Username] ,[MachineName] ,[Message] ,[MessageType] ,[ConnectionName] ,[ConnectionTypeName] ,[ConnectionID] ,[ConnectionUserName] ,[StartDateTime] ,[EndDateTime] ,[StartDateTimeUTC] ,[EndDateTimeUTC] ,[GroupName] ,[CustomerID] ,[Comment] ,[LoggedUserName] ,[Prompt] ,[SecurityGroup] ,[Cost] ,[Data] ,[UserInfoID] ,[SupportClose] ,[CloseMode] ,[OpenMode] ,[HostName] ,[Application] ,[IsEmbedded] ,[RepositoryID] ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)  

Please contact us at [service@devolutions.net](mailto:service@devolutions.net) and we will send you an SQL statement to execute on the database to fix this issue.  


