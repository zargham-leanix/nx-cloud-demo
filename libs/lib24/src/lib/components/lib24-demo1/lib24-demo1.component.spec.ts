import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib24Demo1Component } from './lib24-demo1.component';

describe('Lib24Demo1Component', () => {
  let component: Lib24Demo1Component;
  let fixture: ComponentFixture<Lib24Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib24Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib24Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
