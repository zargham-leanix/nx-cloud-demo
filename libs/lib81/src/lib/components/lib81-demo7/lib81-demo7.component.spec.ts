import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib81Demo7Component } from './lib81-demo7.component';

describe('Lib81Demo7Component', () => {
  let component: Lib81Demo7Component;
  let fixture: ComponentFixture<Lib81Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib81Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib81Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
