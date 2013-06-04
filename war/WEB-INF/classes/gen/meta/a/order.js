var MetaData = function()
{
	this.resourceName = 'order';
	this.attributes = {};

	var metadata = require('airlift/AttributeMetadata');
	this.attributes['orderLineItem'] = metadata.create({ name:"orderLineItem", type:"java.util.ArrayList", isIndexable:true, mapToMany:"orderlineitem", displayOrder:10, label:"order line item" }); 
	this.attributes['person'] = metadata.create({ name:"person", type:"java.lang.String", mapTo:"person", isIndexable:true, displayOrder:20, label:"person" }); 
	this.attributes['auditPostDate'] = metadata.create({ name:"auditPostDate", type:"java.util.Date", isSearchable:true, isIndexable:true, nullable:true, label:"record created date" }); 
	this.attributes['auditPutDate'] = metadata.create({ name:"auditPutDate", type:"java.util.Date", isSearchable:true, isIndexable:true, nullable:true, label:"record updated date" }); 
	this.attributes['auditUserId'] = metadata.create({ name:"auditUserId", type:"java.lang.String", isSearchable:true, isIndexable:true, nullable:true, label:"changed by user id", isPresentable:false }); 
	this.attributes['auditRequestId'] = metadata.create({ name:"auditRequestId", type:"java.lang.String", isSearchable:true, isIndexable:true, nullable:true, label:"web request id", isPresentable:false }); 
	this.attributes['id'] = metadata.create({ name:"id", type:"java.lang.String", isSearchable:false, isPrimaryKey:true, isIndexable:false, nullable:true, displayOrder:0, label:"record id" }); 
}

exports.create = function()
{
	return new MetaData();
};