import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib59Demo48Component } from './lib59-demo48.component';

describe('Lib59Demo48Component', () => {
  let component: Lib59Demo48Component;
  let fixture: ComponentFixture<Lib59Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib59Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib59Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
