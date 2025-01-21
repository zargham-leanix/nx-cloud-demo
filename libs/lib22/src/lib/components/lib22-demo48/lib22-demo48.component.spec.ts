import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib22Demo48Component } from './lib22-demo48.component';

describe('Lib22Demo48Component', () => {
  let component: Lib22Demo48Component;
  let fixture: ComponentFixture<Lib22Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib22Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib22Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
