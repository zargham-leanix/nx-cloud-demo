import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib28Demo38Component } from './lib28-demo38.component';

describe('Lib28Demo38Component', () => {
  let component: Lib28Demo38Component;
  let fixture: ComponentFixture<Lib28Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib28Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib28Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
