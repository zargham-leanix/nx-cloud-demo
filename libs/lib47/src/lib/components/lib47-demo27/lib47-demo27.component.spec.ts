import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib47Demo27Component } from './lib47-demo27.component';

describe('Lib47Demo27Component', () => {
  let component: Lib47Demo27Component;
  let fixture: ComponentFixture<Lib47Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib47Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib47Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
