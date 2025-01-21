import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib99Demo7Component } from './lib99-demo7.component';

describe('Lib99Demo7Component', () => {
  let component: Lib99Demo7Component;
  let fixture: ComponentFixture<Lib99Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib99Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib99Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
