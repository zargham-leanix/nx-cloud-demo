import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib80Demo27Component } from './lib80-demo27.component';

describe('Lib80Demo27Component', () => {
  let component: Lib80Demo27Component;
  let fixture: ComponentFixture<Lib80Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib80Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib80Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
