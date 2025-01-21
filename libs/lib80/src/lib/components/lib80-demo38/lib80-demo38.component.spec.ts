import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib80Demo38Component } from './lib80-demo38.component';

describe('Lib80Demo38Component', () => {
  let component: Lib80Demo38Component;
  let fixture: ComponentFixture<Lib80Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib80Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib80Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
