var ViewModel = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.imgAttribution = ko.observable('');

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
    };

    this.catLevel = ko.computed(function() {
        var level = "";
        var count = this.clickCount();

        if (count < 10) {
            level = "Infanct";
        }
        else if(count >= 10 && count < 100) {
            level = "Teen";
        }
        else if(count >= 100) {
            level = "Grownup";
        }


        return level;
    }, this);
}

ko.applyBindings(new ViewModel());