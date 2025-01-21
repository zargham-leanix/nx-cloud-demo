import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib22Demo29Component } from './lib22-demo29.component';

describe('Lib22Demo29Component', () => {
  let component: Lib22Demo29Component;
  let fixture: ComponentFixture<Lib22Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib22Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib22Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
