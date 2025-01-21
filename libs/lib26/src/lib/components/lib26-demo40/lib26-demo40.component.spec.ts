import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib26Demo40Component } from './lib26-demo40.component';

describe('Lib26Demo40Component', () => {
  let component: Lib26Demo40Component;
  let fixture: ComponentFixture<Lib26Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib26Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib26Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
