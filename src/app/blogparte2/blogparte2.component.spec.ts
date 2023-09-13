import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blogparte2Component } from './blogparte2.component';

describe('Blogparte2Component', () => {
  let component: Blogparte2Component;
  let fixture: ComponentFixture<Blogparte2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Blogparte2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Blogparte2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
