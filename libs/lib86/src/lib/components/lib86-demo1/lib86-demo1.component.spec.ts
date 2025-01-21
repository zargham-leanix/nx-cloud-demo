import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib86Demo1Component } from './lib86-demo1.component';

describe('Lib86Demo1Component', () => {
  let component: Lib86Demo1Component;
  let fixture: ComponentFixture<Lib86Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib86Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib86Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
