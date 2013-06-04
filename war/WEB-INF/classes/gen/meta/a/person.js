var MetaData = function()
{
	this.resourceName = 'person';
	this.attributes = {};

	var metadata = require('airlift/AttributeMetadata');
	this.attributes['firstName'] = metadata.create({ name:"firstName", type:"java.lang.String", displayOrder:10, label:"first name" }); 
	this.attributes['familyName'] = metadata.create({ name:"familyName", type:"java.lang.String", isIndexable:true, displayOrder:20, label:"family name" }); 
	this.attributes['nickName'] = metadata.create({ name:"nickName", type:"java.lang.String", displayOrder:30, label:"nick name" }); 
	this.attributes['birthDate'] = metadata.create({ name:"birthDate", type:"java.util.Date", isIndexable:true, displayOrder:40, label:"birth date" }); 
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