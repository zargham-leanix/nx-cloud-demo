import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib44Demo47Component } from './lib44-demo47.component';

describe('Lib44Demo47Component', () => {
  let component: Lib44Demo47Component;
  let fixture: ComponentFixture<Lib44Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib44Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib44Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
