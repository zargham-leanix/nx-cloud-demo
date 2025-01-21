import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib88Demo47Component } from './lib88-demo47.component';

describe('Lib88Demo47Component', () => {
  let component: Lib88Demo47Component;
  let fixture: ComponentFixture<Lib88Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib88Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib88Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
