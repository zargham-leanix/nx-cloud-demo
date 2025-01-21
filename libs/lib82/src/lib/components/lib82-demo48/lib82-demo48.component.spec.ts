import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib82Demo48Component } from './lib82-demo48.component';

describe('Lib82Demo48Component', () => {
  let component: Lib82Demo48Component;
  let fixture: ComponentFixture<Lib82Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib82Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib82Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
