import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib47Demo48Component } from './lib47-demo48.component';

describe('Lib47Demo48Component', () => {
  let component: Lib47Demo48Component;
  let fixture: ComponentFixture<Lib47Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib47Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib47Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
