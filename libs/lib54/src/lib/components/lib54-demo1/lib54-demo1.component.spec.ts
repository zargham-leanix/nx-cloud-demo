import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib54Demo1Component } from './lib54-demo1.component';

describe('Lib54Demo1Component', () => {
  let component: Lib54Demo1Component;
  let fixture: ComponentFixture<Lib54Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib54Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib54Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
