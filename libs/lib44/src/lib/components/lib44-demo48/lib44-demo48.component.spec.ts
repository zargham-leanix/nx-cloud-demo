import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib44Demo48Component } from './lib44-demo48.component';

describe('Lib44Demo48Component', () => {
  let component: Lib44Demo48Component;
  let fixture: ComponentFixture<Lib44Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib44Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib44Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
