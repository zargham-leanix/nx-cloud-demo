import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib26Demo14Component } from './lib26-demo14.component';

describe('Lib26Demo14Component', () => {
  let component: Lib26Demo14Component;
  let fixture: ComponentFixture<Lib26Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib26Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib26Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
