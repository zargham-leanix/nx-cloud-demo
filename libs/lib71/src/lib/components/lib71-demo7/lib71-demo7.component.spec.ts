import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib71Demo7Component } from './lib71-demo7.component';

describe('Lib71Demo7Component', () => {
  let component: Lib71Demo7Component;
  let fixture: ComponentFixture<Lib71Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib71Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib71Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
