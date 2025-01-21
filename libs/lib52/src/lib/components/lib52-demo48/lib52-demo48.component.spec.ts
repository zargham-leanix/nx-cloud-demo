import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib52Demo48Component } from './lib52-demo48.component';

describe('Lib52Demo48Component', () => {
  let component: Lib52Demo48Component;
  let fixture: ComponentFixture<Lib52Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib52Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib52Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
