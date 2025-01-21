import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib29Demo47Component } from './lib29-demo47.component';

describe('Lib29Demo47Component', () => {
  let component: Lib29Demo47Component;
  let fixture: ComponentFixture<Lib29Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib29Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib29Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
