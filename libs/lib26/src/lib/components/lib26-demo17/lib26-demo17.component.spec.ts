import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib26Demo17Component } from './lib26-demo17.component';

describe('Lib26Demo17Component', () => {
  let component: Lib26Demo17Component;
  let fixture: ComponentFixture<Lib26Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib26Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib26Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
