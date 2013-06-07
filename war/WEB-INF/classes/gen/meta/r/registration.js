exports.create = function()
{
	var metadata = require('airlift/ResourceMetadata').create({ persistable:true, securable:true, presentable:true });

	metadata.name = 'registration';
	metadata.attributes = ['fullName', 'emailAddress', 'mobilePhoneNumber', 'password', 'auditPostDate', 'auditPutDate', 'auditUserId', 'auditRequestId', 'id'];
    metadata.foreignKeys = {};
    metadata.indexedProperties = {"auditPostDate": 1,"auditPutDate": 1,"auditUserId": 1,"auditRequestId": 1};
    metadata.searchProperties = {"auditPostDate": 1,"auditPutDate": 1,"auditUserId": 1,"auditRequestId": 1};
    metadata.encryptedProperties = {"password": 1};

	return metadata;
}