import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib4Demo48Component } from './lib4-demo48.component';

describe('Lib4Demo48Component', () => {
  let component: Lib4Demo48Component;
  let fixture: ComponentFixture<Lib4Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib4Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib4Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
