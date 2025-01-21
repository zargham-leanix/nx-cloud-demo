import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib62Demo47Component } from './lib62-demo47.component';

describe('Lib62Demo47Component', () => {
  let component: Lib62Demo47Component;
  let fixture: ComponentFixture<Lib62Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib62Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib62Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
