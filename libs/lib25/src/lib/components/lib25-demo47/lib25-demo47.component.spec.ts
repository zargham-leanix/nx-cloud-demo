import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib25Demo47Component } from './lib25-demo47.component';

describe('Lib25Demo47Component', () => {
  let component: Lib25Demo47Component;
  let fixture: ComponentFixture<Lib25Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib25Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib25Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
