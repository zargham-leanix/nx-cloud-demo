import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib47Demo47Component } from './lib47-demo47.component';

describe('Lib47Demo47Component', () => {
  let component: Lib47Demo47Component;
  let fixture: ComponentFixture<Lib47Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib47Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib47Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
