import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib97Demo1Component } from './lib97-demo1.component';

describe('Lib97Demo1Component', () => {
  let component: Lib97Demo1Component;
  let fixture: ComponentFixture<Lib97Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib97Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib97Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
