import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib4Demo1Component } from './lib4-demo1.component';

describe('Lib4Demo1Component', () => {
  let component: Lib4Demo1Component;
  let fixture: ComponentFixture<Lib4Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib4Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib4Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
