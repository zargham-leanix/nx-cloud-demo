import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib93Demo48Component } from './lib93-demo48.component';

describe('Lib93Demo48Component', () => {
  let component: Lib93Demo48Component;
  let fixture: ComponentFixture<Lib93Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib93Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib93Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
