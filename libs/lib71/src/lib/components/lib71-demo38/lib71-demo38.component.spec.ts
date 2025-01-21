import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib71Demo38Component } from './lib71-demo38.component';

describe('Lib71Demo38Component', () => {
  let component: Lib71Demo38Component;
  let fixture: ComponentFixture<Lib71Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib71Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib71Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
