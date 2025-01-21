import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib8Demo45Component } from './lib8-demo45.component';

describe('Lib8Demo45Component', () => {
  let component: Lib8Demo45Component;
  let fixture: ComponentFixture<Lib8Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib8Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib8Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
