import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib18Demo27Component } from './lib18-demo27.component';

describe('Lib18Demo27Component', () => {
  let component: Lib18Demo27Component;
  let fixture: ComponentFixture<Lib18Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib18Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib18Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
