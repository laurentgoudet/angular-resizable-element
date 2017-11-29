import { Directive, Input, HostListener, Renderer2, ElementRef, NgZone } from '@angular/core';
/**
 * An element placed inside a `mwlResizable` directive to be used as a drag and resize handle
 *
 * For example
 *
 * ```
 * &lt;div mwlResizable&gt;
 *   &lt;div mwlResizeHandle [resizeEdges]="{bottom: true, right: true}"&gt;&lt;/div&gt;
 * &lt;/div&gt;
 * ```
 */
var ResizeHandle = (function () {
    /**
     * @param {?} renderer
     * @param {?} element
     * @param {?} zone
     */
    function ResizeHandle(renderer, element, zone) {
        this.renderer = renderer;
        this.element = element;
        this.zone = zone;
        /**
         * The `Edges` object that contains the edges of the parent element that dragging the handle will trigger a resize on
         */
        this.resizeEdges = {};
        this.eventListeners = {};
    }
    /**
     * @return {?}
     */
    ResizeHandle.prototype.ngOnDestroy = function () {
        this.unsubscribeEventListeners();
    };
    /**
     * @param {?} event
     * @param {?} mouseX
     * @param {?} mouseY
     * @return {?}
     */
    ResizeHandle.prototype.onMousedown = function (event, mouseX, mouseY) {
        var _this = this;
        event.preventDefault();
        this.zone.runOutsideAngular(function () {
            if (!_this.eventListeners.touchmove) {
                _this.eventListeners.touchmove = _this.renderer.listen(_this.element.nativeElement, 'touchmove', function (event) {
                    _this.onMousemove(event, event.targetTouches[0].clientX, event.targetTouches[0].clientY);
                });
            }
            if (!_this.eventListeners.mousemove) {
                _this.eventListeners.mousemove = _this.renderer.listen(_this.element.nativeElement, 'mousemove', function (event) {
                    _this.onMousemove(event, event.clientX, event.clientY);
                });
            }
            _this.resizable.mousedown.next({ mouseX: mouseX, mouseY: mouseY, edges: _this.resizeEdges });
        });
    };
    /**
     * @param {?} mouseX
     * @param {?} mouseY
     * @return {?}
     */
    ResizeHandle.prototype.onMouseup = function (mouseX, mouseY) {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.unsubscribeEventListeners();
            _this.resizable.mouseup.next({ mouseX: mouseX, mouseY: mouseY, edges: _this.resizeEdges });
        });
    };
    /**
     * @param {?} event
     * @param {?} mouseX
     * @param {?} mouseY
     * @return {?}
     */
    ResizeHandle.prototype.onMousemove = function (event, mouseX, mouseY) {
        this.resizable.mousemove.next({ mouseX: mouseX, mouseY: mouseY, edges: this.resizeEdges, event: event });
    };
    /**
     * @return {?}
     */
    ResizeHandle.prototype.unsubscribeEventListeners = function () {
        var _this = this;
        Object.keys(this.eventListeners).forEach(function (type) {
            _this.eventListeners[type]();
            delete _this.eventListeners[type];
        });
    };
    return ResizeHandle;
}());
export { ResizeHandle };
ResizeHandle.decorators = [
    { type: Directive, args: [{
                selector: '[mwlResizeHandle]'
            },] },
];
/**
 * @nocollapse
 */
ResizeHandle.ctorParameters = function () { return [
    { type: Renderer2, },
    { type: ElementRef, },
    { type: NgZone, },
]; };
ResizeHandle.propDecorators = {
    'resizeEdges': [{ type: Input },],
    'onMousedown': [{ type: HostListener, args: ['touchstart', ['$event', '$event.touches[0].clientX', '$event.touches[0].clientY'],] }, { type: HostListener, args: ['mousedown', ['$event', '$event.clientX', '$event.clientY'],] },],
    'onMouseup': [{ type: HostListener, args: ['touchend', ['$event.changedTouches[0].clientX', '$event.changedTouches[0].clientY'],] }, { type: HostListener, args: ['touchcancel', ['$event.changedTouches[0].clientX', '$event.changedTouches[0].clientY'],] }, { type: HostListener, args: ['mouseup', ['$event.clientX', '$event.clientY'],] },],
};
function ResizeHandle_tsickle_Closure_declarations() {
    /** @type {?} */
    ResizeHandle.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ResizeHandle.ctorParameters;
    /** @type {?} */
    ResizeHandle.propDecorators;
    /**
     * The `Edges` object that contains the edges of the parent element that dragging the handle will trigger a resize on
     * @type {?}
     */
    ResizeHandle.prototype.resizeEdges;
    /** @type {?} */
    ResizeHandle.prototype.resizable;
    /** @type {?} */
    ResizeHandle.prototype.eventListeners;
    /** @type {?} */
    ResizeHandle.prototype.renderer;
    /** @type {?} */
    ResizeHandle.prototype.element;
    /** @type {?} */
    ResizeHandle.prototype.zone;
}
//# sourceMappingURL=resizeHandle.directive.js.map