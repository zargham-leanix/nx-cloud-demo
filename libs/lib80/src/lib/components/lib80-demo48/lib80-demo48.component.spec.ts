import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib80Demo48Component } from './lib80-demo48.component';

describe('Lib80Demo48Component', () => {
  let component: Lib80Demo48Component;
  let fixture: ComponentFixture<Lib80Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib80Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib80Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
