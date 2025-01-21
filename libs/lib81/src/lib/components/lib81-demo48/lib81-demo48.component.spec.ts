import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib81Demo48Component } from './lib81-demo48.component';

describe('Lib81Demo48Component', () => {
  let component: Lib81Demo48Component;
  let fixture: ComponentFixture<Lib81Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib81Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib81Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
