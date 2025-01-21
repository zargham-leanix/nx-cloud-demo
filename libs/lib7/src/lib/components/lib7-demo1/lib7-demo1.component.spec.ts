import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib7Demo1Component } from './lib7-demo1.component';

describe('Lib7Demo1Component', () => {
  let component: Lib7Demo1Component;
  let fixture: ComponentFixture<Lib7Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib7Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib7Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
