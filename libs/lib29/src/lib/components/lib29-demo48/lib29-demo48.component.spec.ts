import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib29Demo48Component } from './lib29-demo48.component';

describe('Lib29Demo48Component', () => {
  let component: Lib29Demo48Component;
  let fixture: ComponentFixture<Lib29Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib29Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib29Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
