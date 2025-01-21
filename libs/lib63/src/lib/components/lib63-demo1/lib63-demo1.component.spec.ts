import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib63Demo1Component } from './lib63-demo1.component';

describe('Lib63Demo1Component', () => {
  let component: Lib63Demo1Component;
  let fixture: ComponentFixture<Lib63Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib63Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib63Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
