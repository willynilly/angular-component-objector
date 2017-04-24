# angular-component-test-object
A test module that offers page objects for Angular components.

## Example unit test (app.spec.ts)
```
import { async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ComponentObject } from 'angular-component-test-object';
import { SomeService } from './some.service';

class AppComponentObject extends ComponentObject {
  constructor() {
    let testComponentClass = AppComponent;
    let declarations = [
      AppComponent,
    ];
    let services = [
      SomeService,
    ];
    super(testComponentClass, declarations, services);
  }

  getAppTitle() {
    return this.getElementText('h1');
  }
}

describe('AppComponent', () => {

  let co: AppComponentObject;

  beforeEach(async( () => {
    co = new AppComponentObject();
  }

));

  it('should create the app', async(() => {
    expect(co.controller).toBeTruthy();
  }));

  it(`should have as title 'insert title here'`, async(() => {
    expect(co.controller.title).toEqual('insert title here');
  }));

  it('should render title in a h1 tag', async(() => {
    expect(co.getAppTitle()).toContain('insert title here');
  }));

});

```
