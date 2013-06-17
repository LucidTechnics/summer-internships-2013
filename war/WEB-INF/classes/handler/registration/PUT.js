var util = require('airlift/util');

exports.handle = function(_web)
{
    var inc = require('airlift/incoming').create(_web);
    var res = require('airlift/resource').create(_web);

    res.each(_web.getResourceName(), {}, res.sequence(inc.convert, inc.validate), function(_name, _resource) {
	if (util.isEmpty(this.allErrors()) === true)
        {
	    var da = require('airlift/da/update').create(_web);
	    da.update(_web.getResourceName(), _resource);
	}
    });
};