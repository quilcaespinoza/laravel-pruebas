import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpetaMainComponent } from './carpeta-main.component';

describe('CarpetaMainComponent', () => {
  let component: CarpetaMainComponent;
  let fixture: ComponentFixture<CarpetaMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarpetaMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarpetaMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
