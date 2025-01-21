import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib26Demo32Component } from './lib26-demo32.component';

describe('Lib26Demo32Component', () => {
  let component: Lib26Demo32Component;
  let fixture: ComponentFixture<Lib26Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib26Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib26Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
