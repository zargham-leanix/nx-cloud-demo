import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib26Demo15Component } from './lib26-demo15.component';

describe('Lib26Demo15Component', () => {
  let component: Lib26Demo15Component;
  let fixture: ComponentFixture<Lib26Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib26Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib26Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
