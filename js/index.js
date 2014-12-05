d3 = require('d3');
_ = require('underscore');

var _group = require('./group.js');

var _svg = null,
    _width = 500,
    _height = 500,
    _blockSize = 20,
    _groups = [];

var _styleToString = function(obj){
    var str = '';
    _.each(_.keys(obj), function(k){
        str += k+':'+obj[k]+';';
    });
    return str;
};

//Public members
var pixelart = function(){};

pixelart.svg = function(_){
    if (!arguments.length)
        return _svg;
    _svg = _;
    return pixelart;
};

pixelart.width = function(_){
    if (!arguments.length)
        return _width;
    _width = _;
    return pixelart;
};

pixelart.height = function(_){
    if (!arguments.length)
        return _height;
    _height = _;
    return pixelart;
};

pixelart.blockSize = function(_){
    if (!arguments.length)
        return _blockSize;
    _blockSize = _;
    return pixelart;
};

pixelart.addGroup = function(){
    var g = Group(pixelart, _.uniqueId('group_'));
    _groups.push(g);
    return g;
};

pixelart.update = function(){
    
};

global.window.pixelart = pixelart;

//module.exports = pixelart;

/*
_svg = (_svg) ? _svg : d3.select('body').append('svg');
    _svg.attr('width', _width).attr('height', _height);
    
    var arr = [];
    
    for(var r = 0; r < _data.length; r++){
        for(var c = 0; c < _data[r].length; c++){
            var el = { x : c * _blockSize, y : r * _blockSize };
            el.style = _styles[_data[r][c]];
            arr.push(el);
        }
    }
    
    _svg.selectAll('.block').data(arr).enter().append('rect')
        .attr('x', function(d){return d.x;})
        .attr('y', function(d){ return d.y;})
        .attr('width', _blockSize)
        .attr('height', _blockSize)
        .attr('style', function(d){return _styleToString(d.style);});*/