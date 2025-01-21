import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib22Demo15Component } from './lib22-demo15.component';

describe('Lib22Demo15Component', () => {
  let component: Lib22Demo15Component;
  let fixture: ComponentFixture<Lib22Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib22Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib22Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
