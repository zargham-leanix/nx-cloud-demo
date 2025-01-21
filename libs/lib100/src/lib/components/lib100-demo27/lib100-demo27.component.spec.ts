import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib100Demo27Component } from './lib100-demo27.component';

describe('Lib100Demo27Component', () => {
  let component: Lib100Demo27Component;
  let fixture: ComponentFixture<Lib100Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib100Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib100Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
