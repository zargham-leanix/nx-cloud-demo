import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib90Demo1Component } from './lib90-demo1.component';

describe('Lib90Demo1Component', () => {
  let component: Lib90Demo1Component;
  let fixture: ComponentFixture<Lib90Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib90Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib90Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
