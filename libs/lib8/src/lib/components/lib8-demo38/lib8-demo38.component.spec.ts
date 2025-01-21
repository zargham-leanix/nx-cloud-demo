import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib8Demo38Component } from './lib8-demo38.component';

describe('Lib8Demo38Component', () => {
  let component: Lib8Demo38Component;
  let fixture: ComponentFixture<Lib8Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib8Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib8Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
