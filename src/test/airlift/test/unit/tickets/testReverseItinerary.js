exports['test reverse itinerary'] = function(_assert)
{
    var t = [['ALB','BWI'],['LAX','IAD'],['BWI','LAX'],['IAD','GA']];
    var answer = [['GA','IAD'],['IAD','LAX'],['LAX','BWI'],['BWI','ALB']];

    _assert.eq(JSON.stringify(reverseSerena(t)), JSON.stringify([['GA','IAD'],['IAD','LAX'],['LAX','BWI'],['BWI','ALB']]), 'test failed');

};

// takes an array of arrays of tickets and reverses the itinerary    
function reverseSerena(_t) {
    var reverse = [];

    // creates an two object that associates departures and arrivals
    var departArrive = {};
    var arriveDepart = {};
    for (var i = 0; i < _t.length; i++) {
	departArrive[_t[i][1]] = _t[i][0];
	arriveDepart[_t[i][0]] = _t[i][1];
    }

    // finds the first departure
    // if a property in departure is not a property in arrival,
    // then it is the first departure place
    // adds [departure, associated arrival] as the first element in reverse
    for (var departures in departArrive) {
	if (!arriveDepart[departures]) {
	    reverse[0] = [departures, departArrive[departures]];
	}
    }

    // follows the path through the object and adds to reverse
    for (var i = 1; i < _t.length; i++) {
	next = reverse[i-1][1];
	reverse[i] = [next,departArrive[next]];
    }
    
    return reverse;
}
