

exports['test reverse itinerary'] = function(_assert)
{
<<<<<<< HEAD
//<<<<<<< HEAD
=======
<<<<<<< HEAD
    var t = [['ALB','BWI'],['LAX','IAD'],['BWI','LAX'],['IAD','GA']];
    var answer = [['GA','IAD'],['IAD','LAX'],['LAX','BWI'],['BWI','ALB']];
//test
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
=======
<<<<<<< HEAD
>>>>>>> d8d2b18efcc550446146f4ff39d8ac64417fddac
	var tickets = [['ALB','BWI'],['LAX','IAD'],['BWI','LAX'],['IAD','GA']];
  	var reversed = [];
    var start;
    reversed=reverse(tickets);
    _assert.eq(JSON.stringify(reversed), JSON.stringify([['GA','IAD'],['IAD','LAX'],['LAX','BWI'],['BWI','ALB']]), 'it worked');
function reverse(_tickets)
{
    var reversedTickets = [];

      var s=[];
      var map=[];
       
	for(var i=0;i<tickets.length;i++)
	{
	   // reversedTickets[i]=[tickets[i][1],tickets[i][0]] ;
	  //  map[reversedTickets[i][0]]=reversedTickets[i][1];
	   // s[reversedTickets[i][1]]=1;
//
           map[tickets[i][1]]=tickets[i][0];
	    s[tickets[i][0]]=1;
	}

	for(i=0;i<tickets.length;i++)
	{
	  //if(s[reversedTickets[i][0]]!=1)
	    if(s[tickets[i][1]]!=1)
	  {
           // start=reversedTickets[i][0];
	      start=tickets[i][1];
	    break;
	    }
	}

	for(i=0;i<tickets.length;i++)
	{
	      // reversedTickets[i][0]=start;
	//	reversedTickets[i][1]=map[start];
	    reversedTickets[i]=[start,map[start]];
		start=reversedTickets[i][1];
	}


    return reversedTickets;
}
};/*
//=======
    var tickets = [['ALB','BWI'],['LAX','IAD'],['BWI','LAX'],['IAD','GA']];
    
  //var reversed = [];
  //  _assert.eq(JSON.stringify([['GA','IAD'],['IAD','LAX'],['LAX','BWI'],['BWI','ALB']]), JSON.stringify([['GA','IAD'],['IAD','LAX'],  ['LAX','BWI'],['BWI','ALB']]), 'test reversed itinerary failed');

  //_assert.eq(true, true, "failed");
    
    _assert.eq(JSON.stringify(reversed(tickets)), JSON.stringify([['GA','IAD'],['IAD','LAX'],['LAX','BWI'],['BWI','ALB']]), 'test reversed itinerary failed');

//};



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
<<<<<<< HEAD
}};
//>>>>>>> faee366173f58067d60b92e1d4f42d2c5fa8d436
*/
=======
}
>>>>>>> faee366173f58067d60b92e1d4f42d2c5fa8d436
>>>>>>> e25c178abb98682f4bc9183bbf13c8564888a2e8
>>>>>>> d8d2b18efcc550446146f4ff39d8ac64417fddac
