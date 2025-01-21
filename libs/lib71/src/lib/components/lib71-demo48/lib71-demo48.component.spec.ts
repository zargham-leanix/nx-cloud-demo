import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib71Demo48Component } from './lib71-demo48.component';

describe('Lib71Demo48Component', () => {
  let component: Lib71Demo48Component;
  let fixture: ComponentFixture<Lib71Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib71Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib71Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
