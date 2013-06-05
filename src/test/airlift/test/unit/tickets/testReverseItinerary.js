

exports['test reverse itinerary'] = function(_assert)
{
<<<<<<< HEAD
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
};
=======
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
>>>>>>> faee366173f58067d60b92e1d4f42d2c5fa8d436
