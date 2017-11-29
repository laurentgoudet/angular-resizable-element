import { NgModule } from '@angular/core';
import { Resizable } from './resizable.directive';
import { ResizeHandle } from './resizeHandle.directive';
var ResizableModule = (function () {
    function ResizableModule() {
    }
    return ResizableModule;
}());
export { ResizableModule };
ResizableModule.decorators = [
    { type: NgModule, args: [{
                declarations: [Resizable, ResizeHandle],
                exports: [Resizable, ResizeHandle]
            },] },
];
/**
 * @nocollapse
 */
ResizableModule.ctorParameters = function () { return []; };
function ResizableModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ResizableModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ResizableModule.ctorParameters;
}
//# sourceMappingURL=resizable.module.js.map