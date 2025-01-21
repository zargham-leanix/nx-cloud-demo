import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib75Demo47Component } from './lib75-demo47.component';

describe('Lib75Demo47Component', () => {
  let component: Lib75Demo47Component;
  let fixture: ComponentFixture<Lib75Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib75Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib75Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
