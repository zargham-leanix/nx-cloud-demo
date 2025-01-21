import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib100Demo7Component } from './lib100-demo7.component';

describe('Lib100Demo7Component', () => {
  let component: Lib100Demo7Component;
  let fixture: ComponentFixture<Lib100Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib100Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib100Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
