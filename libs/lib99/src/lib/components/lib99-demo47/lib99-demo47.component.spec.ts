import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib99Demo47Component } from './lib99-demo47.component';

describe('Lib99Demo47Component', () => {
  let component: Lib99Demo47Component;
  let fixture: ComponentFixture<Lib99Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib99Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib99Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
