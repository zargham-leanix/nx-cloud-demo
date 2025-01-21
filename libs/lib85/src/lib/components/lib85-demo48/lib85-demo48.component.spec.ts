import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib85Demo48Component } from './lib85-demo48.component';

describe('Lib85Demo48Component', () => {
  let component: Lib85Demo48Component;
  let fixture: ComponentFixture<Lib85Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib85Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib85Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
