import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib85Demo38Component } from './lib85-demo38.component';

describe('Lib85Demo38Component', () => {
  let component: Lib85Demo38Component;
  let fixture: ComponentFixture<Lib85Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib85Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib85Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
