import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib13Demo1Component } from './lib13-demo1.component';

describe('Lib13Demo1Component', () => {
  let component: Lib13Demo1Component;
  let fixture: ComponentFixture<Lib13Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib13Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib13Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
