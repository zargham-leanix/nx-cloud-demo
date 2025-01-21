import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib26Demo27Component } from './lib26-demo27.component';

describe('Lib26Demo27Component', () => {
  let component: Lib26Demo27Component;
  let fixture: ComponentFixture<Lib26Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib26Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib26Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
