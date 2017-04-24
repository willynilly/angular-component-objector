import { TestBed } from '@angular/core/testing';

export class ComponentObject {

  fixture: any;
  controller: any;
  compiled: any;

    constructor(testComponentClass, declarations, providers=[]) {

      TestBed.configureTestingModule({
        declarations: declarations,
        providers: providers
      }).compileComponents().then(() => {
        this.fixture = TestBed.createComponent(testComponentClass);
        this.controller = this.fixture.debugElement.componentInstance;
        this.fixture.detectChanges();
        this.compiled = this.fixture.debugElement.nativeElement;
      })

    }

    getElementText(cssSelector) {
       return this.compiled.querySelector(cssSelector).textContent;
    }

    getElementTexts(cssSelector) {
      return [].map.call(this.compiled.querySelectorAll(cssSelector), (node) => {
        return node.textContent;
      });
    }

    hasElement(cssSelector) {
      return this.compiled.querySelector(cssSelector) !== null;
    }
}
