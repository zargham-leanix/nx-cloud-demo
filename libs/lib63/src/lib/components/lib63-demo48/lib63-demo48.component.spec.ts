import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib63Demo48Component } from './lib63-demo48.component';

describe('Lib63Demo48Component', () => {
  let component: Lib63Demo48Component;
  let fixture: ComponentFixture<Lib63Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib63Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib63Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
