import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib58Demo47Component } from './lib58-demo47.component';

describe('Lib58Demo47Component', () => {
  let component: Lib58Demo47Component;
  let fixture: ComponentFixture<Lib58Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib58Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib58Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
