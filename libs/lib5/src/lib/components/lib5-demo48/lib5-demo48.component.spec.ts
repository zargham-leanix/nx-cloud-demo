import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib5Demo48Component } from './lib5-demo48.component';

describe('Lib5Demo48Component', () => {
  let component: Lib5Demo48Component;
  let fixture: ComponentFixture<Lib5Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib5Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib5Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
