import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib76Demo48Component } from './lib76-demo48.component';

describe('Lib76Demo48Component', () => {
  let component: Lib76Demo48Component;
  let fixture: ComponentFixture<Lib76Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib76Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib76Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
