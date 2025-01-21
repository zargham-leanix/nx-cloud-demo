import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib80Demo47Component } from './lib80-demo47.component';

describe('Lib80Demo47Component', () => {
  let component: Lib80Demo47Component;
  let fixture: ComponentFixture<Lib80Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib80Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib80Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
