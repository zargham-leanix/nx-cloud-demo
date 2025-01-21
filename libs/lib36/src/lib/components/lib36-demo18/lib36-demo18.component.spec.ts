import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib36Demo18Component } from './lib36-demo18.component';

describe('Lib36Demo18Component', () => {
  let component: Lib36Demo18Component;
  let fixture: ComponentFixture<Lib36Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib36Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib36Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
