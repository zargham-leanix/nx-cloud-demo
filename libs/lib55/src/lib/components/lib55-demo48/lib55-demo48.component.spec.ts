import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib55Demo48Component } from './lib55-demo48.component';

describe('Lib55Demo48Component', () => {
  let component: Lib55Demo48Component;
  let fixture: ComponentFixture<Lib55Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib55Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib55Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
