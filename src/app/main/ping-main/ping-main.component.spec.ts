import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PingMainComponent } from './ping-main.component';

describe('PingMainComponent', () => {
  let component: PingMainComponent;
  let fixture: ComponentFixture<PingMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PingMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PingMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
