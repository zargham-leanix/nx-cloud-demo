import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib44Demo38Component } from './lib44-demo38.component';

describe('Lib44Demo38Component', () => {
  let component: Lib44Demo38Component;
  let fixture: ComponentFixture<Lib44Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib44Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib44Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
