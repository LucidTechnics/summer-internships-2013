exports.create = function()
{
	var metadata = require('airlift/ResourceMetadata').create({ persistable:true, securable:true, presentable:true });

	metadata.name = 'order';
	metadata.attributes = ['orderLineItem', 'person', 'auditPostDate', 'auditPutDate', 'auditUserId', 'auditRequestId', 'id'];
    metadata.foreignKeys = {"orderLineItem": 1,"person": 1};
    metadata.indexedProperties = {"orderLineItem": 1,"person": 1,"auditPostDate": 1,"auditPutDate": 1,"auditUserId": 1,"auditRequestId": 1};
    metadata.searchProperties = {"auditPostDate": 1,"auditPutDate": 1,"auditUserId": 1,"auditRequestId": 1};
    metadata.encryptedProperties = {};

	return metadata;
}