import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib12Demo47Component } from './lib12-demo47.component';

describe('Lib12Demo47Component', () => {
  let component: Lib12Demo47Component;
  let fixture: ComponentFixture<Lib12Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib12Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib12Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
