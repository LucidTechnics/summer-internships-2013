function reverseJ(_tickets)
{
		var reversedTickets = [];
		var flights = new Object();

        //Flip the tickets and add them as property value
        //pairs to flights
        for(var i = 0; i < _tickets.length; ++i)
        {
                _tickets[i] = [_tickets[i][1],_tickets[i][0]];
                flights[_tickets[i][0]] = _tickets[i][1];
        }


        //starts with arbitrary ticket
        //process the ticket
        //the continues down links until flights[next] = null

        for(x in flights)
        {
           	var aCurr = [];    //Stores the current list of ordered tickets
		
				//next = value of next stop in itinary to check for departure
	  	var next = flights[x];
		
		//Adds the next ticket to the  array, then deletes the 
		//ticket from the flights, this ensures not processing
		//ticket more than once. 
                
		aCurr.push([x,flights[x]]);
                delete flights[x];

		//Continues down current path until end of itineary is 
		//reached which occurs when there is no departure ticket
		//for the station 'next'
                
		while(flights[next])
                {
                        aCurr.push([next,flights[next]]);
                        var prev = next;
                        next = flights[next];
                        delete flights[prev];
                }
		
		//Adds the tickets to the beginning of reversedTickets

                for(var i = aCurr.length - 1; i >=0; --i)
                {
                        reversedTickets.unshift(aCurr[i]);
                }
        }
 	return reversedTickets;
}


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
