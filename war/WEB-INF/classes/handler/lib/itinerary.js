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

exports["reversed"] = function(t) {
    for (var i = 0; i < t.length; i++ ) {
	var tmp = t[i][0];
	t[i][0] = t[i][1];
	t[i][1] = tmp;
    }
    t = sort(t);
    return t;
};

