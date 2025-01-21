import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib30Demo38Component } from './lib30-demo38.component';

describe('Lib30Demo38Component', () => {
  let component: Lib30Demo38Component;
  let fixture: ComponentFixture<Lib30Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib30Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib30Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
