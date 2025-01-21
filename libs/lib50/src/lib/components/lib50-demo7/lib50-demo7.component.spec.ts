import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib50Demo7Component } from './lib50-demo7.component';

describe('Lib50Demo7Component', () => {
  let component: Lib50Demo7Component;
  let fixture: ComponentFixture<Lib50Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib50Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib50Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
