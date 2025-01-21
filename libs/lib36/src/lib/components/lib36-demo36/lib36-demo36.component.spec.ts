import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib36Demo36Component } from './lib36-demo36.component';

describe('Lib36Demo36Component', () => {
  let component: Lib36Demo36Component;
  let fixture: ComponentFixture<Lib36Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib36Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib36Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
