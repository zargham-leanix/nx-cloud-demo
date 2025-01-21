import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib26Demo7Component } from './lib26-demo7.component';

describe('Lib26Demo7Component', () => {
  let component: Lib26Demo7Component;
  let fixture: ComponentFixture<Lib26Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib26Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib26Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
