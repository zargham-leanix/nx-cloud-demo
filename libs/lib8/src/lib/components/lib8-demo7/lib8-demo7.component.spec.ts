import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib8Demo7Component } from './lib8-demo7.component';

describe('Lib8Demo7Component', () => {
  let component: Lib8Demo7Component;
  let fixture: ComponentFixture<Lib8Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib8Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib8Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
