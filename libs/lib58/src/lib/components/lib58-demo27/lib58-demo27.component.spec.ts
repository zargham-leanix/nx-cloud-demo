import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib58Demo27Component } from './lib58-demo27.component';

describe('Lib58Demo27Component', () => {
  let component: Lib58Demo27Component;
  let fixture: ComponentFixture<Lib58Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib58Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib58Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
