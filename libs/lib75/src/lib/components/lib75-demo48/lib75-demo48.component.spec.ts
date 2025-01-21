import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib75Demo48Component } from './lib75-demo48.component';

describe('Lib75Demo48Component', () => {
  let component: Lib75Demo48Component;
  let fixture: ComponentFixture<Lib75Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib75Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib75Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
