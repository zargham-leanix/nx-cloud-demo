import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib57Demo48Component } from './lib57-demo48.component';

describe('Lib57Demo48Component', () => {
  let component: Lib57Demo48Component;
  let fixture: ComponentFixture<Lib57Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib57Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib57Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
