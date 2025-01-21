import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib85Demo7Component } from './lib85-demo7.component';

describe('Lib85Demo7Component', () => {
  let component: Lib85Demo7Component;
  let fixture: ComponentFixture<Lib85Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib85Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib85Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
