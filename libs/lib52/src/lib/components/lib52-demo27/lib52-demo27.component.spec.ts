import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib52Demo27Component } from './lib52-demo27.component';

describe('Lib52Demo27Component', () => {
  let component: Lib52Demo27Component;
  let fixture: ComponentFixture<Lib52Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib52Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib52Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
