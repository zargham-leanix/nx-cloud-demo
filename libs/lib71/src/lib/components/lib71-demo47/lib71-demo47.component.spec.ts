import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib71Demo47Component } from './lib71-demo47.component';

describe('Lib71Demo47Component', () => {
  let component: Lib71Demo47Component;
  let fixture: ComponentFixture<Lib71Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib71Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib71Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
