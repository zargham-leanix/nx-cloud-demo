import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib64Demo1Component } from './lib64-demo1.component';

describe('Lib64Demo1Component', () => {
  let component: Lib64Demo1Component;
  let fixture: ComponentFixture<Lib64Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib64Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib64Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
