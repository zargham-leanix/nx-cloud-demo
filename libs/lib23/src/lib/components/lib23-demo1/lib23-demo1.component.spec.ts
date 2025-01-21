import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib23Demo1Component } from './lib23-demo1.component';

describe('Lib23Demo1Component', () => {
  let component: Lib23Demo1Component;
  let fixture: ComponentFixture<Lib23Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib23Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib23Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
