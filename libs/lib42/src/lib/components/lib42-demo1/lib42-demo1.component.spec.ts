import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib42Demo1Component } from './lib42-demo1.component';

describe('Lib42Demo1Component', () => {
  let component: Lib42Demo1Component;
  let fixture: ComponentFixture<Lib42Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib42Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib42Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
