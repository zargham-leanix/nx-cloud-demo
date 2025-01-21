import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib28Demo47Component } from './lib28-demo47.component';

describe('Lib28Demo47Component', () => {
  let component: Lib28Demo47Component;
  let fixture: ComponentFixture<Lib28Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib28Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib28Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
