var MetaData = function()
{
	this.resourceName = 'orderlineitem';
	this.attributes = {};

	var metadata = require('airlift/AttributeMetadata');
	this.attributes['sku'] = metadata.create({ name:"sku", type:"java.lang.String", displayOrder:10, label:"sku" }); 
	this.attributes['price'] = metadata.create({ name:"price", type:"java.lang.Double", displayOrder:20, label:"price" }); 
	this.attributes['order'] = metadata.create({ name:"order", type:"java.lang.String", mapTo:"order", isIndexable:true, displayOrder:30, label:"order" }); 
	this.attributes['auditPostDate'] = metadata.create({ name:"auditPostDate", type:"java.util.Date", isSearchable:true, isIndexable:true, nullable:true, label:"record created date" }); 
	this.attributes['product'] = metadata.create({ name:"product", type:"java.lang.String", mapTo:"product", isIndexable:true, displayOrder:40, label:"product" }); 
	this.attributes['auditPutDate'] = metadata.create({ name:"auditPutDate", type:"java.util.Date", isSearchable:true, isIndexable:true, nullable:true, label:"record updated date" }); 
	this.attributes['auditUserId'] = metadata.create({ name:"auditUserId", type:"java.lang.String", isSearchable:true, isIndexable:true, nullable:true, label:"changed by user id", isPresentable:false }); 
	this.attributes['auditRequestId'] = metadata.create({ name:"auditRequestId", type:"java.lang.String", isSearchable:true, isIndexable:true, nullable:true, label:"web request id", isPresentable:false }); 
	this.attributes['id'] = metadata.create({ name:"id", type:"java.lang.String", isSearchable:false, isPrimaryKey:true, isIndexable:false, nullable:true, displayOrder:0, label:"record id" }); 
}

exports.create = function()
{
	return new MetaData();
};