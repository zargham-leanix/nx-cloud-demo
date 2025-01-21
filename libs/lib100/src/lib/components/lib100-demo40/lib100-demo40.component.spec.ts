import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib100Demo40Component } from './lib100-demo40.component';

describe('Lib100Demo40Component', () => {
  let component: Lib100Demo40Component;
  let fixture: ComponentFixture<Lib100Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib100Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib100Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
