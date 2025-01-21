import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib25Demo48Component } from './lib25-demo48.component';

describe('Lib25Demo48Component', () => {
  let component: Lib25Demo48Component;
  let fixture: ComponentFixture<Lib25Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib25Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib25Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
