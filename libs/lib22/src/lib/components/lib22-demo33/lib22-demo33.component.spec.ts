import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib22Demo33Component } from './lib22-demo33.component';

describe('Lib22Demo33Component', () => {
  let component: Lib22Demo33Component;
  let fixture: ComponentFixture<Lib22Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib22Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib22Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
