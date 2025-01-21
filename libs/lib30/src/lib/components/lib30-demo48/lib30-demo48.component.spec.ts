import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib30Demo48Component } from './lib30-demo48.component';

describe('Lib30Demo48Component', () => {
  let component: Lib30Demo48Component;
  let fixture: ComponentFixture<Lib30Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib30Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib30Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
