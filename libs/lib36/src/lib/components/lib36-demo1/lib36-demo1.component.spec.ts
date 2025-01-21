import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib36Demo1Component } from './lib36-demo1.component';

describe('Lib36Demo1Component', () => {
  let component: Lib36Demo1Component;
  let fixture: ComponentFixture<Lib36Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib36Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib36Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
