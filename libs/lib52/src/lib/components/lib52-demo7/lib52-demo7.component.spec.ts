import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib52Demo7Component } from './lib52-demo7.component';

describe('Lib52Demo7Component', () => {
  let component: Lib52Demo7Component;
  let fixture: ComponentFixture<Lib52Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib52Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib52Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
