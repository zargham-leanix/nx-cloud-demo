import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib46Demo1Component } from './lib46-demo1.component';

describe('Lib46Demo1Component', () => {
  let component: Lib46Demo1Component;
  let fixture: ComponentFixture<Lib46Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib46Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib46Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
