exports.create = function()
{
	var metadata = require('airlift/ResourceMetadata').create({ persistable:true, securable:true, presentable:true });

	metadata.name = 'orderlineitem';
	metadata.attributes = ['sku', 'price', 'order', 'auditPostDate', 'product', 'auditPutDate', 'auditUserId', 'auditRequestId', 'id'];
    metadata.foreignKeys = {"order": 1,"product": 1};
    metadata.indexedProperties = {"order": 1,"auditPostDate": 1,"product": 1,"auditPutDate": 1,"auditUserId": 1,"auditRequestId": 1};
    metadata.searchProperties = {"auditPostDate": 1,"auditPutDate": 1,"auditUserId": 1,"auditRequestId": 1};
    metadata.encryptedProperties = {};

	return metadata;
}