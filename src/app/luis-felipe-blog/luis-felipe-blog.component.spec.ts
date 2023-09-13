import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuisFelipeBlogComponent } from './luis-felipe-blog.component';

describe('LuisFelipeBlogComponent', () => {
  let component: LuisFelipeBlogComponent;
  let fixture: ComponentFixture<LuisFelipeBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuisFelipeBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LuisFelipeBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
