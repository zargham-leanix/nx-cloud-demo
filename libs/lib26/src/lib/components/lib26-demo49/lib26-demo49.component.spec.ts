import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib26Demo49Component } from './lib26-demo49.component';

describe('Lib26Demo49Component', () => {
  let component: Lib26Demo49Component;
  let fixture: ComponentFixture<Lib26Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib26Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib26Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
