import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib93Demo38Component } from './lib93-demo38.component';

describe('Lib93Demo38Component', () => {
  let component: Lib93Demo38Component;
  let fixture: ComponentFixture<Lib93Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib93Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib93Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
