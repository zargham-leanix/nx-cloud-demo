import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib57Demo47Component } from './lib57-demo47.component';

describe('Lib57Demo47Component', () => {
  let component: Lib57Demo47Component;
  let fixture: ComponentFixture<Lib57Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib57Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib57Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
