import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib12Demo48Component } from './lib12-demo48.component';

describe('Lib12Demo48Component', () => {
  let component: Lib12Demo48Component;
  let fixture: ComponentFixture<Lib12Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib12Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib12Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
