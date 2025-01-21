import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib94Demo48Component } from './lib94-demo48.component';

describe('Lib94Demo48Component', () => {
  let component: Lib94Demo48Component;
  let fixture: ComponentFixture<Lib94Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib94Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib94Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
