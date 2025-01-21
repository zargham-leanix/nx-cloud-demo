import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib25Demo7Component } from './lib25-demo7.component';

describe('Lib25Demo7Component', () => {
  let component: Lib25Demo7Component;
  let fixture: ComponentFixture<Lib25Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib25Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib25Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
