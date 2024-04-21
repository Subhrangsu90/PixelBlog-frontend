import {
  CommonModule,
  NgClass,
  NgForOf,
  NgStyle
} from "./chunk-WDPWQ7Y4.js";
import {
  Component,
  EventEmitter,
  Injectable,
  Input,
  Output,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-HUNEXZGW.js";
import "./chunk-LGU3RXIR.js";
import "./chunk-YRBHFNW2.js";

// node_modules/smt-dialog/fesm2022/smt-dialog.mjs
function SMTDialogComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 8);
    ɵɵlistener("click", function SMTDialogComponent_button_10_Template_button_click_0_listener() {
      const restoredCtx = ɵɵrestoreView(_r3);
      const button_r1 = restoredCtx.$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.executeAction(button_r1.action));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const button_r1 = ctx.$implicit;
    ɵɵproperty("ngClass", "btn btn-" + button_r1.style);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", button_r1.text, " ");
  }
}
var _c0 = (a0) => ({
  active: a0
});
var _c1 = ["*"];
var _SmtDialogService = class _SmtDialogService {
  constructor() {
  }
};
_SmtDialogService.ɵfac = function SmtDialogService_Factory(t) {
  return new (t || _SmtDialogService)();
};
_SmtDialogService.ɵprov = ɵɵdefineInjectable({
  token: _SmtDialogService,
  factory: _SmtDialogService.ɵfac,
  providedIn: "root"
});
var SmtDialogService = _SmtDialogService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmtDialogService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var _SmtDialogComponent = class _SmtDialogComponent {
};
_SmtDialogComponent.ɵfac = function SmtDialogComponent_Factory(t) {
  return new (t || _SmtDialogComponent)();
};
_SmtDialogComponent.ɵcmp = ɵɵdefineComponent({
  type: _SmtDialogComponent,
  selectors: [["lib-smt-dialog"]],
  standalone: true,
  features: [ɵɵStandaloneFeature],
  decls: 2,
  vars: 0,
  template: function SmtDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "p");
      ɵɵtext(1, " smt-dialog works! ");
      ɵɵelementEnd();
    }
  }
});
var SmtDialogComponent = _SmtDialogComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmtDialogComponent, [{
    type: Component,
    args: [{
      selector: "lib-smt-dialog",
      standalone: true,
      imports: [],
      template: `
    <p>
      smt-dialog works!
    </p>
  `
    }]
  }], null, null);
})();
var _SMTDialogComponent = class _SMTDialogComponent {
  constructor() {
    this.isOpen = false;
    this.title = "";
    this.buttons = [];
    this.modalStyle = {};
    this.showOverlay = true;
    this.closeModal = new EventEmitter();
  }
  onCloseModal() {
    this.isOpen = false;
    this.closeModal.emit();
  }
  executeAction(action) {
    if (action) {
      action();
    }
    this.onCloseModal();
  }
};
_SMTDialogComponent.ɵfac = function SMTDialogComponent_Factory(t) {
  return new (t || _SMTDialogComponent)();
};
_SMTDialogComponent.ɵcmp = ɵɵdefineComponent({
  type: _SMTDialogComponent,
  selectors: [["smt-dialog"]],
  inputs: {
    isOpen: "isOpen",
    title: "title",
    buttons: "buttons",
    modalStyle: "modalStyle",
    showOverlay: "showOverlay"
  },
  outputs: {
    closeModal: "closeModal"
  },
  standalone: true,
  features: [ɵɵStandaloneFeature],
  ngContentSelectors: _c1,
  decls: 11,
  vars: 9,
  consts: [[1, "overlay", 3, "ngClass"], [1, "modal", 3, "ngClass", "ngStyle"], [1, "smt-head"], [1, "smt-title"], [1, "material-symbols-outlined", "close-icon", 3, "click"], [1, "smt-container"], [1, "button-container"], ["type", "button", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["type", "button", 3, "ngClass", "click"]],
  template: function SMTDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelement(0, "div", 0);
      ɵɵelementStart(1, "div", 1)(2, "div", 2)(3, "p", 3);
      ɵɵtext(4);
      ɵɵelementEnd();
      ɵɵelementStart(5, "span", 4);
      ɵɵlistener("click", function SMTDialogComponent_Template_span_click_5_listener() {
        return ctx.onCloseModal();
      });
      ɵɵtext(6, "close ");
      ɵɵelementEnd()();
      ɵɵelementStart(7, "div", 5);
      ɵɵprojection(8);
      ɵɵelementStart(9, "div", 6);
      ɵɵtemplate(10, SMTDialogComponent_button_10_Template, 2, 2, "button", 7);
      ɵɵelementEnd()()();
    }
    if (rf & 2) {
      ɵɵproperty("ngClass", ɵɵpureFunction1(5, _c0, ctx.isOpen));
      ɵɵadvance();
      ɵɵproperty("ngClass", ɵɵpureFunction1(7, _c0, ctx.isOpen))("ngStyle", ctx.modalStyle);
      ɵɵadvance(3);
      ɵɵtextInterpolate(ctx.title);
      ɵɵadvance(6);
      ɵɵproperty("ngForOf", ctx.buttons);
    }
  },
  dependencies: [CommonModule, NgClass, NgForOf, NgStyle],
  styles: [".overlay{display:none;position:fixed;top:0;left:0;width:100%;height:100%;background-color:#000000b3;z-index:999;opacity:0;transition:opacity .3s ease-in-out}.overlay.active{display:flex;justify-content:center;align-items:center;opacity:1}.modal{display:none;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background-color:#fff;border-radius:8px;box-shadow:0 0 20px #0000004d;overflow:auto;opacity:0;transition:opacity .3s ease-in-out}.modal.active{display:block;opacity:1;z-index:1000}.smt-head{display:flex;justify-content:space-between;height:min-content;background-color:#f88f39;padding:.5rem}.smt-title{margin:0;font-weight:700;font-size:1.1em;letter-spacing:.02em;color:#212121}.close-icon{cursor:pointer;font-size:20px;border-radius:50%;display:flex;align-items:center;justify-content:center;padding:.1rem;background-color:#fff;color:#1e1e1e;font-weight:800}.close-icon:hover{background-color:#1e1e1e;color:#fff}.smt-container{padding:1rem}.button-container{margin-top:20px;text-align:center}.btn{padding:10px 20px;margin:0 5px;border:none;border-radius:16rem;cursor:pointer;background-color:#ff7300;color:#fff;transition:background-color .3s ease;text-transform:uppercase;font-weight:700}.btn:hover{color:#121212}.btn-secondary{background-color:#1e1e1f;color:#fff}.btn-secondary:hover{color:#ff7300}.smt-container form{width:100%}.smt-container form label{display:block;margin-bottom:5px}.smt-container form input[type=text],.smt-container form input[type=email],.smt-container form textarea,.smt-container form input{width:-webkit-fill-available;padding:.5rem;margin-bottom:10px;border:1px solid #ccc;border-radius:5px;outline-color:#f88f39}.smt-container form button[type=submit]{padding:10px 20px;background-color:#ff7300;color:#fff;border:none;border-radius:5px;cursor:pointer}.smt-container form button[type=submit]:hover{color:#121212}\n"],
  encapsulation: 2
});
var SMTDialogComponent = _SMTDialogComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SMTDialogComponent, [{
    type: Component,
    args: [{
      selector: "smt-dialog",
      standalone: true,
      imports: [CommonModule],
      encapsulation: ViewEncapsulation$1.None,
      template: `<div class="overlay" [ngClass]="{ active: isOpen }"></div>\r
<div class="modal" [ngClass]="{ active: isOpen }" [ngStyle]="modalStyle">\r
  <div class="smt-head">\r
    <p class="smt-title">{{ title }}</p>\r
    <span class="material-symbols-outlined close-icon" (click)="onCloseModal()"\r
      >close\r
    </span>\r
  </div>\r
  <div class="smt-container">\r
    <ng-content></ng-content>\r
\r
    <div class="button-container">\r
      <button\r
        *ngFor="let button of buttons"\r
        type="button"\r
        (click)="executeAction(button.action)"\r
        [ngClass]="'btn btn-' + button.style"\r
      >\r
        {{ button.text }}\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
`,
      styles: [".overlay{display:none;position:fixed;top:0;left:0;width:100%;height:100%;background-color:#000000b3;z-index:999;opacity:0;transition:opacity .3s ease-in-out}.overlay.active{display:flex;justify-content:center;align-items:center;opacity:1}.modal{display:none;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background-color:#fff;border-radius:8px;box-shadow:0 0 20px #0000004d;overflow:auto;opacity:0;transition:opacity .3s ease-in-out}.modal.active{display:block;opacity:1;z-index:1000}.smt-head{display:flex;justify-content:space-between;height:min-content;background-color:#f88f39;padding:.5rem}.smt-title{margin:0;font-weight:700;font-size:1.1em;letter-spacing:.02em;color:#212121}.close-icon{cursor:pointer;font-size:20px;border-radius:50%;display:flex;align-items:center;justify-content:center;padding:.1rem;background-color:#fff;color:#1e1e1e;font-weight:800}.close-icon:hover{background-color:#1e1e1e;color:#fff}.smt-container{padding:1rem}.button-container{margin-top:20px;text-align:center}.btn{padding:10px 20px;margin:0 5px;border:none;border-radius:16rem;cursor:pointer;background-color:#ff7300;color:#fff;transition:background-color .3s ease;text-transform:uppercase;font-weight:700}.btn:hover{color:#121212}.btn-secondary{background-color:#1e1e1f;color:#fff}.btn-secondary:hover{color:#ff7300}.smt-container form{width:100%}.smt-container form label{display:block;margin-bottom:5px}.smt-container form input[type=text],.smt-container form input[type=email],.smt-container form textarea,.smt-container form input{width:-webkit-fill-available;padding:.5rem;margin-bottom:10px;border:1px solid #ccc;border-radius:5px;outline-color:#f88f39}.smt-container form button[type=submit]{padding:10px 20px;background-color:#ff7300;color:#fff;border:none;border-radius:5px;cursor:pointer}.smt-container form button[type=submit]:hover{color:#121212}\n"]
    }]
  }], () => [], {
    isOpen: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    buttons: [{
      type: Input
    }],
    modalStyle: [{
      type: Input
    }],
    showOverlay: [{
      type: Input
    }],
    closeModal: [{
      type: Output
    }]
  });
})();
export {
  SMTDialogComponent,
  SmtDialogComponent,
  SmtDialogService
};
//# sourceMappingURL=smt-dialog.js.map
