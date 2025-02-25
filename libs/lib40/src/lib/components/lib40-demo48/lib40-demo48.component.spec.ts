import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib40Demo48Component } from './lib40-demo48.component';

describe('Lib40Demo48Component', () => {
  let component: Lib40Demo48Component;
  let fixture: ComponentFixture<Lib40Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib40Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib40Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
