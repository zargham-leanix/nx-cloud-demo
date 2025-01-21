import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib40Demo1Component } from './lib40-demo1.component';

describe('Lib40Demo1Component', () => {
  let component: Lib40Demo1Component;
  let fixture: ComponentFixture<Lib40Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib40Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib40Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
