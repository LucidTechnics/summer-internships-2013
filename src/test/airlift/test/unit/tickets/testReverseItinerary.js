function reverse(_tickets)
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
exports['test reverse itinerary'] = function(_assert)
{
	var tickets = [['ALB','BWI'],['LAX','IAD'],['BWI','LAX'],['IAD','GA']];
	var reversed = reverse(tickets);      
	_assert.eq(JSON.stringify(reversed), JSON.stringify([['GA','IAD'],['IAD','LAX'],['LAX','BWI'],['BWI','ALB']]), 'test reversed itinerary failed'); 
};
