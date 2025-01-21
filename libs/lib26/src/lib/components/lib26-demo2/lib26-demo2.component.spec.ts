import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib26Demo2Component } from './lib26-demo2.component';

describe('Lib26Demo2Component', () => {
  let component: Lib26Demo2Component;
  let fixture: ComponentFixture<Lib26Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib26Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib26Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
