import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib48Demo48Component } from './lib48-demo48.component';

describe('Lib48Demo48Component', () => {
  let component: Lib48Demo48Component;
  let fixture: ComponentFixture<Lib48Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib48Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib48Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
