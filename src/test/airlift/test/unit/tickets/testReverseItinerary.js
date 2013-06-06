exports['test reverse itinerary'] = function(_assert)
{
    var itinerary = require("handler/lib/itinerary");
    var tickets = [['ALB','BWI'],['LAX','IAD'],['BWI','LAX'],['IAD','GA']];
    
    //var reversed = [];
    //  _assert.eq(JSON.stringify([['GA','IAD'],['IAD','LAX'],['LAX','BWI'],['BWI','ALB']]), JSON.stringify([['GA','IAD'],['IAD','LAX'],  ['LAX','BWI'],['BWI','ALB']]), 'test reversed itinerary failed');

    //_assert.eq(true, true, "failed");
    
    _assert.eq(JSON.stringify(itinerary.reversed(tickets)), JSON.stringify([['GA','IAD'],['IAD','LAX'],['LAX','BWI'],['BWI','ALB']]), 'test reversed itinerary failed');

};
