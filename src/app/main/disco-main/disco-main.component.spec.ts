import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoMainComponent } from './disco-main.component';

describe('DiscoMainComponent', () => {
  let component: DiscoMainComponent;
  let fixture: ComponentFixture<DiscoMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
