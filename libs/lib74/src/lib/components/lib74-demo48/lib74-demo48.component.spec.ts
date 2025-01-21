import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib74Demo48Component } from './lib74-demo48.component';

describe('Lib74Demo48Component', () => {
  let component: Lib74Demo48Component;
  let fixture: ComponentFixture<Lib74Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib74Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib74Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
