var MetaData = function()
{
	this.resourceName = 'product';
	this.attributes = {};

	var metadata = require('airlift/AttributeMetadata');
	this.attributes['name'] = metadata.create({ name:"name", type:"java.lang.String", displayOrder:10, label:"name" }); 
	this.attributes['cost'] = metadata.create({ name:"cost", type:"java.lang.Double", displayOrder:20, label:"cost" }); 
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