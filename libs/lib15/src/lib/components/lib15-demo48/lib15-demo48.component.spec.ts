import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib15Demo48Component } from './lib15-demo48.component';

describe('Lib15Demo48Component', () => {
  let component: Lib15Demo48Component;
  let fixture: ComponentFixture<Lib15Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib15Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib15Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
