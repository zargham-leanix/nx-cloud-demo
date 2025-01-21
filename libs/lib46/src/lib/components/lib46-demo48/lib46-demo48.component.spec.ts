import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib46Demo48Component } from './lib46-demo48.component';

describe('Lib46Demo48Component', () => {
  let component: Lib46Demo48Component;
  let fixture: ComponentFixture<Lib46Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib46Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib46Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
