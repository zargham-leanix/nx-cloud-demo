import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib99Demo27Component } from './lib99-demo27.component';

describe('Lib99Demo27Component', () => {
  let component: Lib99Demo27Component;
  let fixture: ComponentFixture<Lib99Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib99Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib99Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
