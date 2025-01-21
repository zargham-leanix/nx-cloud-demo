import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib21Demo48Component } from './lib21-demo48.component';

describe('Lib21Demo48Component', () => {
  let component: Lib21Demo48Component;
  let fixture: ComponentFixture<Lib21Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib21Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib21Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
