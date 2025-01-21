import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib27Demo1Component } from './lib27-demo1.component';

describe('Lib27Demo1Component', () => {
  let component: Lib27Demo1Component;
  let fixture: ComponentFixture<Lib27Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib27Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib27Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
