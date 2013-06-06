exports['test reverse itinerary'] = function(_assert)
{
    var itinerary = require("handler/lib/itinerary");
    var tickets = [['ALB','BWI'],['LAX','IAD'],['BWI','LAX'],['IAD','GA']];
<<<<<<< HEAD
    var itinerary = require("handler/lib/itinerary");
    _assert.eq(JSON.stringify(itinerary.reversed(tickets)), JSON.stringify([['GA','IAD'],['IAD','LAX'],['LAX','BWI'],['BWI','ALB']]), 'test reversed itinerary failed');

};



=======

    var itinerary = require("handler/lib/itinerary");
    
    _assert.eq(JSON.stringify(itinerary.reversed(tickets)), JSON.stringify([['GA','IAD'],['IAD','LAX'],['LAX','BWI'],['BWI','ALB']]), 'test reversed itinerary failed');

};
>>>>>>> 83ed46514cff37118ef1e3a402ac51501b3aef49
