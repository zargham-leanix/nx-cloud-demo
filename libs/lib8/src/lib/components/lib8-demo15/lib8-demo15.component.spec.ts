import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib8Demo15Component } from './lib8-demo15.component';

describe('Lib8Demo15Component', () => {
  let component: Lib8Demo15Component;
  let fixture: ComponentFixture<Lib8Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib8Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib8Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
