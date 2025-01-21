import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib61Demo38Component } from './lib61-demo38.component';

describe('Lib61Demo38Component', () => {
  let component: Lib61Demo38Component;
  let fixture: ComponentFixture<Lib61Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib61Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib61Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
