import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib11Demo47Component } from './lib11-demo47.component';

describe('Lib11Demo47Component', () => {
  let component: Lib11Demo47Component;
  let fixture: ComponentFixture<Lib11Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib11Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib11Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
