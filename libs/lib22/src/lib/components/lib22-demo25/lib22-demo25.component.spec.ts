import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib22Demo25Component } from './lib22-demo25.component';

describe('Lib22Demo25Component', () => {
  let component: Lib22Demo25Component;
  let fixture: ComponentFixture<Lib22Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib22Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib22Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
