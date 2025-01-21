import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib86Demo48Component } from './lib86-demo48.component';

describe('Lib86Demo48Component', () => {
  let component: Lib86Demo48Component;
  let fixture: ComponentFixture<Lib86Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib86Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib86Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
