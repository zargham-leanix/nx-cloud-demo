import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib33Demo38Component } from './lib33-demo38.component';

describe('Lib33Demo38Component', () => {
  let component: Lib33Demo38Component;
  let fixture: ComponentFixture<Lib33Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib33Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib33Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
