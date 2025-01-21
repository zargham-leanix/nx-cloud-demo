import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib24Demo48Component } from './lib24-demo48.component';

describe('Lib24Demo48Component', () => {
  let component: Lib24Demo48Component;
  let fixture: ComponentFixture<Lib24Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib24Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib24Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
