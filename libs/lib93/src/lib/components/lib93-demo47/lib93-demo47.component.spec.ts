import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib93Demo47Component } from './lib93-demo47.component';

describe('Lib93Demo47Component', () => {
  let component: Lib93Demo47Component;
  let fixture: ComponentFixture<Lib93Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib93Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib93Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
