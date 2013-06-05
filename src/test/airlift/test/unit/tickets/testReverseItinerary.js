exports['test reverse itinerary'] = function(_assert)
{
    var t = [['ALB','BWI'],['LAX','IAD'],['BWI','LAX'],['IAD','GA']];
    var answer = [['GA','IAD'],['IAD','LAX'],['LAX','BWI'],['BWI','ALB']];

    _assert.eq(JSON.stringify(reverse(t)), JSON.stringify([['GA','IAD'],['IAD','LAX'],['LAX','BWI'],['BWI','ALB']]), 'test failed');

};

// takes an array of arrays of tickets and reverses the itinerary    
function reverse(_t) {
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

/*  Old algorithm
    // reverses tickets
    for (var i = 0; i < t.length; i++) {
	var temp = t[i][0];
	t[i][0] = t[i][1];
	t[i][1] = temp;
    }

    // creates a list of departures and arrivals
    var colDepart = [];
    var colArrive = [];
    for (var i = 0; i < t.length; i++) {
	colDepart.push(t[i][0]);
	colArrive.push(t[i][1]);
    }

    // creates an object that associates departures, arrivals
    var obj = {};
    for (var i = 0; i < t.length; i++) {
	obj[t[i][0]] = t[i][1];
    }

    // finds the first departure
    // if an element in departure does not appear in arrival,
    // then it is the first departure place
    var first = null;
    for (var i = 0; i < t.length; i++) {
	for (var j = 0; j < t.length; j++) {
	    if (colDepart[i] == colArrive[j]) {
		break;
	    }
	    first = colDepart[i];
	    break;
	}
    }
    
    // adds first destination as first element in reverse
    // follows the path through the object and adds to reverse
    var reverse = [];
    reverse[0] = [first,obj[first]];
    for (var i = 1; i < t.length; i++) {
	next = reverse[i-1][1];
	reverse[i] = [next,obj[next]];
    }
//4n + n^2
*/