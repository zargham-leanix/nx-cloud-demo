import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib52Demo47Component } from './lib52-demo47.component';

describe('Lib52Demo47Component', () => {
  let component: Lib52Demo47Component;
  let fixture: ComponentFixture<Lib52Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib52Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib52Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
