import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib25Demo38Component } from './lib25-demo38.component';

describe('Lib25Demo38Component', () => {
  let component: Lib25Demo38Component;
  let fixture: ComponentFixture<Lib25Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib25Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib25Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
