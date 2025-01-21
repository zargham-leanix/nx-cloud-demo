import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib83Demo7Component } from './lib83-demo7.component';

describe('Lib83Demo7Component', () => {
  let component: Lib83Demo7Component;
  let fixture: ComponentFixture<Lib83Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib83Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib83Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
