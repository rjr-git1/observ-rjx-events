import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonExampleComponent } from './json-example.component';

describe('JsonExampleComponent', () => {
  let component: JsonExampleComponent;
  let fixture: ComponentFixture<JsonExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
