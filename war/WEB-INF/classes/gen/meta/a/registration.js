var MetaData = function()
{
	this.resourceName = 'registration';
	this.attributes = {};

	var metadata = require('airlift/AttributeMetadata');
	this.attributes['fullName'] = metadata.create({ name:"fullName", type:"java.lang.String", displayOrder:10, label:"full name" }); 
	this.attributes['emailAddress'] = metadata.create({ name:"emailAddress", type:"java.lang.String", displayOrder:20, label:"email address" }); 
	this.attributes['mobilePhoneNumber'] = metadata.create({ name:"mobilePhoneNumber", type:"java.lang.String", required:false, displayOrder:30, label:"mobile phone number" }); 
	this.attributes['password'] = metadata.create({ name:"password", type:"java.lang.String", encrypted:true, displayOrder:40, label:"password" }); 
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