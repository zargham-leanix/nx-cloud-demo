import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib28Demo48Component } from './lib28-demo48.component';

describe('Lib28Demo48Component', () => {
  let component: Lib28Demo48Component;
  let fixture: ComponentFixture<Lib28Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib28Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib28Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
