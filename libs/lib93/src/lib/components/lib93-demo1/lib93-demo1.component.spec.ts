import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib93Demo1Component } from './lib93-demo1.component';

describe('Lib93Demo1Component', () => {
  let component: Lib93Demo1Component;
  let fixture: ComponentFixture<Lib93Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib93Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib93Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
