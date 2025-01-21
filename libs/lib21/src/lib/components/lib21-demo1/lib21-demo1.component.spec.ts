import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib21Demo1Component } from './lib21-demo1.component';

describe('Lib21Demo1Component', () => {
  let component: Lib21Demo1Component;
  let fixture: ComponentFixture<Lib21Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib21Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib21Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
