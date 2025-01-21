import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib95Demo38Component } from './lib95-demo38.component';

describe('Lib95Demo38Component', () => {
  let component: Lib95Demo38Component;
  let fixture: ComponentFixture<Lib95Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib95Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib95Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
