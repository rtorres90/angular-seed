"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var things = [
            { id: 11, name: 'Wea' },
            { id: 12, name: 'Weaita' },
            { id: 13, name: 'Vaina' },
            { id: 14, name: 'Coso' },
            { id: 15, name: 'Thing' }
        ];
        return { things: things };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map