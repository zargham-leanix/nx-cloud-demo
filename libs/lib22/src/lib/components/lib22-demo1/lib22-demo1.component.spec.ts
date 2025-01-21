import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib22Demo1Component } from './lib22-demo1.component';

describe('Lib22Demo1Component', () => {
  let component: Lib22Demo1Component;
  let fixture: ComponentFixture<Lib22Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib22Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib22Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
