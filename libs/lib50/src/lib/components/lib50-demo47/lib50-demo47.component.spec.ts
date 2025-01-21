import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib50Demo47Component } from './lib50-demo47.component';

describe('Lib50Demo47Component', () => {
  let component: Lib50Demo47Component;
  let fixture: ComponentFixture<Lib50Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib50Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib50Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
