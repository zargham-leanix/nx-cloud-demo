import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib75Demo27Component } from './lib75-demo27.component';

describe('Lib75Demo27Component', () => {
  let component: Lib75Demo27Component;
  let fixture: ComponentFixture<Lib75Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib75Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib75Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
