import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib81Demo38Component } from './lib81-demo38.component';

describe('Lib81Demo38Component', () => {
  let component: Lib81Demo38Component;
  let fixture: ComponentFixture<Lib81Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib81Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib81Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
