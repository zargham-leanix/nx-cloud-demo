import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib72Demo1Component } from './lib72-demo1.component';

describe('Lib72Demo1Component', () => {
  let component: Lib72Demo1Component;
  let fixture: ComponentFixture<Lib72Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib72Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib72Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
