import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib27Demo48Component } from './lib27-demo48.component';

describe('Lib27Demo48Component', () => {
  let component: Lib27Demo48Component;
  let fixture: ComponentFixture<Lib27Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib27Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib27Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
