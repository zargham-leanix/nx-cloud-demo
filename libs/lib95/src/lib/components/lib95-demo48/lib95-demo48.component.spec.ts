import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib95Demo48Component } from './lib95-demo48.component';

describe('Lib95Demo48Component', () => {
  let component: Lib95Demo48Component;
  let fixture: ComponentFixture<Lib95Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib95Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib95Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
