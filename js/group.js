module.exports = function(pixelart, id){
    
    var _blockSize = pixelart.blockSize() || 20,
        _data = [],
        _styles = {},
        _id = id,
        _x = 0,
        _y = 0;
    
    var group = function(){};
    
    group.blockSize = function(_){
        if (!arguments.length)
            return _blockSize;
        _blockSize = _;
        return group;
    };

    group.data = function(_){
        if (!arguments.length)
            return _data;
        _data = _;
        return group;
    };

    group.styles = function(_){
        if (!arguments.length)
            return _styles;
        _styles = _;
        return group;
    };
    
    group.id = function(){
        return _id;
    };
    
    group.x = function(_){
        if (!arguments.length)
            return _x;
        _x = _;
        return group;
    };
    
    group.y = function(_){
        if (!arguments.length)
            return _y;
        _y = _;
        return group;
    }
    
    return group;
};