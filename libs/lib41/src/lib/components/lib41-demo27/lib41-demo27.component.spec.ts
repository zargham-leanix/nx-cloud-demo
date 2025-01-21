import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib41Demo27Component } from './lib41-demo27.component';

describe('Lib41Demo27Component', () => {
  let component: Lib41Demo27Component;
  let fixture: ComponentFixture<Lib41Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib41Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib41Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
