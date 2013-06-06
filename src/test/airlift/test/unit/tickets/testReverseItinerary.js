exports['test reverse itinerary'] = function(_assert)
{
    var tickets = [['ALB','BWI'],['LAX','IAD'],['BWI','LAX'],['IAD','GA']];

    var itinerary = require("handler/lib/itinerary");
    
    _assert.eq(JSON.stringify(itinerary.reversed(tickets)), JSON.stringify([['GA','IAD'],['IAD','LAX'],['LAX','BWI'],['BWI','ALB']]), 'test reversed itinerary failed');

};
