import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib38Demo1Component } from './lib38-demo1.component';

describe('Lib38Demo1Component', () => {
  let component: Lib38Demo1Component;
  let fixture: ComponentFixture<Lib38Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib38Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib38Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
