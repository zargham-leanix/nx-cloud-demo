import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib58Demo48Component } from './lib58-demo48.component';

describe('Lib58Demo48Component', () => {
  let component: Lib58Demo48Component;
  let fixture: ComponentFixture<Lib58Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib58Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib58Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
