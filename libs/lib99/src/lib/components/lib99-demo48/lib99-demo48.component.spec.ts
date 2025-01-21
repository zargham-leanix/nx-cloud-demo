import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib99Demo48Component } from './lib99-demo48.component';

describe('Lib99Demo48Component', () => {
  let component: Lib99Demo48Component;
  let fixture: ComponentFixture<Lib99Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib99Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib99Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
