import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib22Demo37Component } from './lib22-demo37.component';

describe('Lib22Demo37Component', () => {
  let component: Lib22Demo37Component;
  let fixture: ComponentFixture<Lib22Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib22Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib22Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
