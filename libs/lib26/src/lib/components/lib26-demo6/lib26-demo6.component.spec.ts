import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib26Demo6Component } from './lib26-demo6.component';

describe('Lib26Demo6Component', () => {
  let component: Lib26Demo6Component;
  let fixture: ComponentFixture<Lib26Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib26Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib26Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
