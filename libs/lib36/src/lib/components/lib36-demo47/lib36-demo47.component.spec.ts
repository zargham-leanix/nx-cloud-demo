import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib36Demo47Component } from './lib36-demo47.component';

describe('Lib36Demo47Component', () => {
  let component: Lib36Demo47Component;
  let fixture: ComponentFixture<Lib36Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib36Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib36Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
