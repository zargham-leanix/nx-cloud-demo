import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib26Demo33Component } from './lib26-demo33.component';

describe('Lib26Demo33Component', () => {
  let component: Lib26Demo33Component;
  let fixture: ComponentFixture<Lib26Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib26Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib26Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
