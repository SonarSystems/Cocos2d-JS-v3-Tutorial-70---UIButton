var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        var sprite = new cc.Sprite.create(res.CloseNormal_png);
        sprite.setAnchorPoint(cc.p(0.5, 0.5));
        sprite.setPosition(cc.p(size.width / 2, size.height / 2));
        //this.addChild(sprite, 0);

        var button = new ccui.Button();
        button.loadTextures(res.CloseNormal_png, res.CloseSelected_png);
        button.x = size.width / 2;
        button.y = size.height / 2;
        button.addTouchEventListener(this.touchEvent, this);
        this.addChild(button);

        return true;
    },

    touchEvent: function(sender, type)
    {
        switch (type)
        {
            case ccui.Widget.TOUCH_BEGAN:
                cc.log("Touch Down");

                break;

            case ccui.Widget.TOUCH_MOVED:
                cc.log("Touch Moved");

                break;

            case ccui.Widget.TOUCH_ENDED:
                cc.log("Touch Ended");

                break;

            case ccui.Widget.TOUCH_CANCELLED:
                cc.log("Touch Cancelled");

                break;                
        }
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

