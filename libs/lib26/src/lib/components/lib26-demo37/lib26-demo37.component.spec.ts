import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib26Demo37Component } from './lib26-demo37.component';

describe('Lib26Demo37Component', () => {
  let component: Lib26Demo37Component;
  let fixture: ComponentFixture<Lib26Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib26Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib26Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
