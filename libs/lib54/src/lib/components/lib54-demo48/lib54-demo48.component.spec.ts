import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib54Demo48Component } from './lib54-demo48.component';

describe('Lib54Demo48Component', () => {
  let component: Lib54Demo48Component;
  let fixture: ComponentFixture<Lib54Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib54Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib54Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
