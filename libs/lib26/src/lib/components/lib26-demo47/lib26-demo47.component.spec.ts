import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib26Demo47Component } from './lib26-demo47.component';

describe('Lib26Demo47Component', () => {
  let component: Lib26Demo47Component;
  let fixture: ComponentFixture<Lib26Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib26Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib26Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
