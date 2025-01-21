import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib41Demo47Component } from './lib41-demo47.component';

describe('Lib41Demo47Component', () => {
  let component: Lib41Demo47Component;
  let fixture: ComponentFixture<Lib41Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib41Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib41Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
