import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib28Demo7Component } from './lib28-demo7.component';

describe('Lib28Demo7Component', () => {
  let component: Lib28Demo7Component;
  let fixture: ComponentFixture<Lib28Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib28Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib28Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
