import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib22Demo7Component } from './lib22-demo7.component';

describe('Lib22Demo7Component', () => {
  let component: Lib22Demo7Component;
  let fixture: ComponentFixture<Lib22Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib22Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib22Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
