import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib84Demo27Component } from './lib84-demo27.component';

describe('Lib84Demo27Component', () => {
  let component: Lib84Demo27Component;
  let fixture: ComponentFixture<Lib84Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib84Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib84Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
