import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib55Demo7Component } from './lib55-demo7.component';

describe('Lib55Demo7Component', () => {
  let component: Lib55Demo7Component;
  let fixture: ComponentFixture<Lib55Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib55Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib55Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
