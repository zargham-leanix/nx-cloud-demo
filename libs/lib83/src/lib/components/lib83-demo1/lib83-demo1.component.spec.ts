import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib83Demo1Component } from './lib83-demo1.component';

describe('Lib83Demo1Component', () => {
  let component: Lib83Demo1Component;
  let fixture: ComponentFixture<Lib83Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib83Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib83Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
