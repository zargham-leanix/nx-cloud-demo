import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib98Demo1Component } from './lib98-demo1.component';

describe('Lib98Demo1Component', () => {
  let component: Lib98Demo1Component;
  let fixture: ComponentFixture<Lib98Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib98Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib98Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
