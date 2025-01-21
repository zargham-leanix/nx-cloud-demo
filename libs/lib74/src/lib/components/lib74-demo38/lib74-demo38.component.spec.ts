import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib74Demo38Component } from './lib74-demo38.component';

describe('Lib74Demo38Component', () => {
  let component: Lib74Demo38Component;
  let fixture: ComponentFixture<Lib74Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib74Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib74Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
