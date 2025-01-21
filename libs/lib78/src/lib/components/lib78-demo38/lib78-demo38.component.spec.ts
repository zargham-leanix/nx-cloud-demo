import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib78Demo38Component } from './lib78-demo38.component';

describe('Lib78Demo38Component', () => {
  let component: Lib78Demo38Component;
  let fixture: ComponentFixture<Lib78Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib78Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib78Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
