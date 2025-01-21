import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib88Demo48Component } from './lib88-demo48.component';

describe('Lib88Demo48Component', () => {
  let component: Lib88Demo48Component;
  let fixture: ComponentFixture<Lib88Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib88Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib88Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
