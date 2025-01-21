import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib86Demo47Component } from './lib86-demo47.component';

describe('Lib86Demo47Component', () => {
  let component: Lib86Demo47Component;
  let fixture: ComponentFixture<Lib86Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib86Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib86Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
