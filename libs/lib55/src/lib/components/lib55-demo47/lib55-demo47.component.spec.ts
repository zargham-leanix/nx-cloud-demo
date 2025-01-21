import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib55Demo47Component } from './lib55-demo47.component';

describe('Lib55Demo47Component', () => {
  let component: Lib55Demo47Component;
  let fixture: ComponentFixture<Lib55Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib55Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib55Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
