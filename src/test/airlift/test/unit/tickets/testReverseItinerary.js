

exports['test reverse itinerary'] = function(_assert)
{
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