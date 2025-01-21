import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib76Demo1Component } from './lib76-demo1.component';

describe('Lib76Demo1Component', () => {
  let component: Lib76Demo1Component;
  let fixture: ComponentFixture<Lib76Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib76Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib76Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
