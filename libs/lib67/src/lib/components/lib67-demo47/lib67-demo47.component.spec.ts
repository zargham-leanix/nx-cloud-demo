import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib67Demo47Component } from './lib67-demo47.component';

describe('Lib67Demo47Component', () => {
  let component: Lib67Demo47Component;
  let fixture: ComponentFixture<Lib67Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib67Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib67Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
