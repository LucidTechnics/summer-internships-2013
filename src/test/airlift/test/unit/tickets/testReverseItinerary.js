/*function reverse(_tickets)
{
    var reversedTickets = [];
    var map = [][];

    for (var i = 0; i < _tickets.length; i++) {
	map[pos(_tickets[i][0])][0] = _tickets[i][1];
	map[pos(_tickets[i][0])][1] = _tickets[i][0];
	map[pos(_tickets[i][1])][0] = _tickets[i][1];
    }
    var end;
    for (var i = 0; i < map.length; i++) {
	if (map[i][0] != null && map[i][1] == null ) {
	    end = map
	}
    }
    


    return reversedTickets;
}

function pos(_t) {
    var num = 0;
    for (var i = 0; var < _t.length; i++) {
	num += _t.charCodeAt(i);
    }
    return num;
}*/
// This code is me attempty to do it in O(N)... It's not done


exports['test reverse itinerary'] = function(_assert)
{
    var tickets = [['ALB','BWI'],['LAX','IAD'],['BWI','LAX'],['IAD','GA']];
    
  //var reversed = [];
  //  _assert.eq(JSON.stringify([['GA','IAD'],['IAD','LAX'],['LAX','BWI'],['BWI','ALB']]), JSON.stringify([['GA','IAD'],['IAD','LAX'],  ['LAX','BWI'],['BWI','ALB']]), 'test reversed itinerary failed');

  //_assert.eq(true, true, "failed");
    
    _assert.eq(JSON.stringify(reversed(tickets)), JSON.stringify([['GA','IAD'],['IAD','LAX'],['LAX','BWI'],['BWI','ALB']]), 'test reversed itinerary failed');

};



function reversed(t) {
    for (var i = 0; i < t.length; i++ ) {
	var tmp = t[i][0];
	t[i][0] = t[i][1];
	t[i][1] = tmp;
    }
    t = sort(t);
    return t;
}


function sort(t) {
    var tt = [];
    tt.push(t[0][0]);
    tt.push(t[0][1]);

    for (var i = 0; i < t.length; i++) {
	for (var j = 0; j < t.length; j++) {
	    if (t[j][1] === tt[0]) {
		tt.unshift(t[j][0]);
	    } else if (t[j][0] === tt[tt.length - 1]) {
		tt.push(t[j][1]);
	    }
	}
    }
    for (var i = 0; i < tt.length - 1; i++ ) {
	t[i][0] = tt[i];
	t[i][1] = tt[i + 1];
    }
    return t;
}