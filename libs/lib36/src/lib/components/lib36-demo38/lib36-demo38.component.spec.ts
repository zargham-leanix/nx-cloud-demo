import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib36Demo38Component } from './lib36-demo38.component';

describe('Lib36Demo38Component', () => {
  let component: Lib36Demo38Component;
  let fixture: ComponentFixture<Lib36Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib36Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib36Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
