import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib51Demo1Component } from './lib51-demo1.component';

describe('Lib51Demo1Component', () => {
  let component: Lib51Demo1Component;
  let fixture: ComponentFixture<Lib51Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib51Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib51Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
