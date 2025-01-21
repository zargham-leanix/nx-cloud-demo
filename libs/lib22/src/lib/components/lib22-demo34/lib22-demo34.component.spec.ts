import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib22Demo34Component } from './lib22-demo34.component';

describe('Lib22Demo34Component', () => {
  let component: Lib22Demo34Component;
  let fixture: ComponentFixture<Lib22Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib22Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib22Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
