import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib95Demo47Component } from './lib95-demo47.component';

describe('Lib95Demo47Component', () => {
  let component: Lib95Demo47Component;
  let fixture: ComponentFixture<Lib95Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib95Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib95Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
