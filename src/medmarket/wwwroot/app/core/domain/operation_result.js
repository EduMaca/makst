System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var OperationResult;
    return {
        setters:[],
        execute: function() {
            OperationResult = (function () {
                function OperationResult(succeeded, message) {
                    this.Succeeded = succeeded;
                    this.Message = message;
                }
                return OperationResult;
            }());
            exports_1("OperationResult", OperationResult);
        }
    }
});
//# sourceMappingURL=operation_result.js.map