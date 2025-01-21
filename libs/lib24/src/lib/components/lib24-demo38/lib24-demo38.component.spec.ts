import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib24Demo38Component } from './lib24-demo38.component';

describe('Lib24Demo38Component', () => {
  let component: Lib24Demo38Component;
  let fixture: ComponentFixture<Lib24Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib24Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib24Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
