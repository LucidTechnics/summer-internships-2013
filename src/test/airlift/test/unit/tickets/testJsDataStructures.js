exports['test map'] = function(_assert)
{
    var map = {};

    map.key = 1;
    map['key'] = 2;

    var set = {};
    set['hello'] = 1;

    if (set['hello'] === 1)
    {
	//hello is in the set
    }

    set['hello'] = 1;
    
    var length = 0;

    for (var keys in set)
    {
	length++;
    }

    _assert.eq(1, length, 'I am surprised to see this is not equal to one');
};