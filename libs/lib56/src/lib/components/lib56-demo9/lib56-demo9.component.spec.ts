import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib56Demo9Component } from './lib56-demo9.component';

describe('Lib56Demo9Component', () => {
  let component: Lib56Demo9Component;
  let fixture: ComponentFixture<Lib56Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib56Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib56Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
