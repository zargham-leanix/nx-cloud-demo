import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib79Demo1Component } from './lib79-demo1.component';

describe('Lib79Demo1Component', () => {
  let component: Lib79Demo1Component;
  let fixture: ComponentFixture<Lib79Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib79Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib79Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
