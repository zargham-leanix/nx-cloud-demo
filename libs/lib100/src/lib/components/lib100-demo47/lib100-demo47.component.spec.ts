import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib100Demo47Component } from './lib100-demo47.component';

describe('Lib100Demo47Component', () => {
  let component: Lib100Demo47Component;
  let fixture: ComponentFixture<Lib100Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib100Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib100Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
