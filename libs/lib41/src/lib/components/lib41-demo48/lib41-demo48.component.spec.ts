import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib41Demo48Component } from './lib41-demo48.component';

describe('Lib41Demo48Component', () => {
  let component: Lib41Demo48Component;
  let fixture: ComponentFixture<Lib41Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib41Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib41Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
