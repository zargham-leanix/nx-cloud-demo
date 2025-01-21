import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib64Demo48Component } from './lib64-demo48.component';

describe('Lib64Demo48Component', () => {
  let component: Lib64Demo48Component;
  let fixture: ComponentFixture<Lib64Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib64Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib64Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
