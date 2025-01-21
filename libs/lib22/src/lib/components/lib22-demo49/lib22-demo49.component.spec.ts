import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib22Demo49Component } from './lib22-demo49.component';

describe('Lib22Demo49Component', () => {
  let component: Lib22Demo49Component;
  let fixture: ComponentFixture<Lib22Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib22Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib22Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
