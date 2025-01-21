import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib4Demo38Component } from './lib4-demo38.component';

describe('Lib4Demo38Component', () => {
  let component: Lib4Demo38Component;
  let fixture: ComponentFixture<Lib4Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib4Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib4Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
