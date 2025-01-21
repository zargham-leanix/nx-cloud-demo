import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib15Demo47Component } from './lib15-demo47.component';

describe('Lib15Demo47Component', () => {
  let component: Lib15Demo47Component;
  let fixture: ComponentFixture<Lib15Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib15Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib15Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
