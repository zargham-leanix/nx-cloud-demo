import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib28Demo27Component } from './lib28-demo27.component';

describe('Lib28Demo27Component', () => {
  let component: Lib28Demo27Component;
  let fixture: ComponentFixture<Lib28Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib28Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib28Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
