exports['test reverse itinerary'] = function(_assert)
{
	var tickets = [['ALB','BWI'],['LAX','IAD'],['BWI','LAX'],['IAD','GA']];
	var reversed = [];

	_assert.eq(reversed, [['GA','IAD'],['IAD','LAX'],['LAX','BWI'],['BWI','ALB']], 'test reversed itinerary failed');

};