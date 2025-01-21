import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib33Demo48Component } from './lib33-demo48.component';

describe('Lib33Demo48Component', () => {
  let component: Lib33Demo48Component;
  let fixture: ComponentFixture<Lib33Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib33Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib33Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
