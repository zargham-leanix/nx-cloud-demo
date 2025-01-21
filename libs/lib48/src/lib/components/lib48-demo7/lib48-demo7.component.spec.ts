import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib48Demo7Component } from './lib48-demo7.component';

describe('Lib48Demo7Component', () => {
  let component: Lib48Demo7Component;
  let fixture: ComponentFixture<Lib48Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib48Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib48Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
