import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib26Demo11Component } from './lib26-demo11.component';

describe('Lib26Demo11Component', () => {
  let component: Lib26Demo11Component;
  let fixture: ComponentFixture<Lib26Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib26Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib26Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
