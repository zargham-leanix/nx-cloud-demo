import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib94Demo1Component } from './lib94-demo1.component';

describe('Lib94Demo1Component', () => {
  let component: Lib94Demo1Component;
  let fixture: ComponentFixture<Lib94Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib94Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib94Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
