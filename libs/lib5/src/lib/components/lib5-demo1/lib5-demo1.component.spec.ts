import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib5Demo1Component } from './lib5-demo1.component';

describe('Lib5Demo1Component', () => {
  let component: Lib5Demo1Component;
  let fixture: ComponentFixture<Lib5Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib5Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib5Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
