import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib45Demo1Component } from './lib45-demo1.component';

describe('Lib45Demo1Component', () => {
  let component: Lib45Demo1Component;
  let fixture: ComponentFixture<Lib45Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib45Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib45Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
