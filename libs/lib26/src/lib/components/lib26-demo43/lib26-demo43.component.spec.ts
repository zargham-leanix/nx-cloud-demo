import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib26Demo43Component } from './lib26-demo43.component';

describe('Lib26Demo43Component', () => {
  let component: Lib26Demo43Component;
  let fixture: ComponentFixture<Lib26Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib26Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib26Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
