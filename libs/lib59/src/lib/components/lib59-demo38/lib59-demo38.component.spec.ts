import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib59Demo38Component } from './lib59-demo38.component';

describe('Lib59Demo38Component', () => {
  let component: Lib59Demo38Component;
  let fixture: ComponentFixture<Lib59Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib59Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib59Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
