import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib15Demo1Component } from './lib15-demo1.component';

describe('Lib15Demo1Component', () => {
  let component: Lib15Demo1Component;
  let fixture: ComponentFixture<Lib15Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib15Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib15Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
