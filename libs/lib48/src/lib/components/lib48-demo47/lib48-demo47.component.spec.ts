import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib48Demo47Component } from './lib48-demo47.component';

describe('Lib48Demo47Component', () => {
  let component: Lib48Demo47Component;
  let fixture: ComponentFixture<Lib48Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib48Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib48Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
