import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib53Demo7Component } from './lib53-demo7.component';

describe('Lib53Demo7Component', () => {
  let component: Lib53Demo7Component;
  let fixture: ComponentFixture<Lib53Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib53Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib53Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
