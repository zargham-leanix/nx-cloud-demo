import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib14Demo1Component } from './lib14-demo1.component';

describe('Lib14Demo1Component', () => {
  let component: Lib14Demo1Component;
  let fixture: ComponentFixture<Lib14Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib14Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib14Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
