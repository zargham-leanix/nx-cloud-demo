import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib72Demo48Component } from './lib72-demo48.component';

describe('Lib72Demo48Component', () => {
  let component: Lib72Demo48Component;
  let fixture: ComponentFixture<Lib72Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib72Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib72Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
