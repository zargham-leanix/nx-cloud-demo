import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib84Demo47Component } from './lib84-demo47.component';

describe('Lib84Demo47Component', () => {
  let component: Lib84Demo47Component;
  let fixture: ComponentFixture<Lib84Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib84Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib84Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
