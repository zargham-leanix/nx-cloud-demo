import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib29Demo27Component } from './lib29-demo27.component';

describe('Lib29Demo27Component', () => {
  let component: Lib29Demo27Component;
  let fixture: ComponentFixture<Lib29Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib29Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib29Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
