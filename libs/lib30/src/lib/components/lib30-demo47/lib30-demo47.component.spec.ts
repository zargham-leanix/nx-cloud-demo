import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib30Demo47Component } from './lib30-demo47.component';

describe('Lib30Demo47Component', () => {
  let component: Lib30Demo47Component;
  let fixture: ComponentFixture<Lib30Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib30Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib30Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
